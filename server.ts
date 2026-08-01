import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
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

async function connectDB() {
  if (!dbClient) {
    await client.connect();
    dbClient = client;
    console.log('Connected to MongoDB');
  }
  return dbClient;
}

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

app.post('/api/content', async (req, res) => {
  try {
    const db = (await connectDB()).db(process.env.MONGODB_DB || 'hyper3d');
    const payload = req.body;
    await db.collection('content').updateOne({}, { $set: payload }, { upsert: true });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save content' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
