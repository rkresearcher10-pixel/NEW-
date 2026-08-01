import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;
const mongoUser = process.env.MONGODB_USERNAME;
const mongoPass = process.env.MONGODB_PASSWORD;

if (!mongoUri) {
  console.error('Missing MONGODB_URI in environment.');
  process.exit(1);
}

const client = new MongoClient(mongoUri, {
  auth: mongoUser && mongoPass ? { username: mongoUser, password: mongoPass } : undefined,
});

let dbClient: MongoClient;
const contentSubscribers = new Set<(payload: string) => void>();

async function connectDB() {
  if (!dbClient) {
    await client.connect();
    dbClient = client;
    console.log('Connected to MongoDB');
  }
  return dbClient;
}

function broadcastContentUpdate(payload: unknown) {
  const message = JSON.stringify(payload);
  for (const send of contentSubscribers) {
    send(message);
  }
}

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'hyper3d-backend' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/api/content', async (req, res) => {
  try {
    const db = (await connectDB()).db(process.env.MONGODB_DB || 'hyper3d');
    const content = await db.collection('content').findOne({});
    res.json(content || {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

app.get('/api/content/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const send = (payload: string) => {
    res.write(`data: ${payload}\n\n`);
  };

  contentSubscribers.add(send);
  res.write(': connected\n\n');

  req.on('close', () => {
    contentSubscribers.delete(send);
  });
});

app.post('/api/content', async (req, res) => {
  try {
    const db = (await connectDB()).db(process.env.MONGODB_DB || 'hyper3d');
    const payload = req.body;
    await db.collection('content').updateOne({}, { $set: payload }, { upsert: true });
    const updatedDoc = await db.collection('content').findOne({});
    broadcastContentUpdate(updatedDoc || {});
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save content' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
