export interface ModelAsset {
  id: string;
  title: string;
  prompt: string;
  category: 'Characters' | 'Props' | 'Vehicles' | 'Architecture' | 'Sci-Fi' | 'Fantasy';
  thumbnailUrl: string;
  polyCount: number;
  format: string[];
  generationTime: string;
  modelType: 'box' | 'sphere' | 'torusKnot' | 'cylinder' | 'complex' | 'robot' | 'helmet' | 'crystal';
  primaryColor: string;
  roughness: number;
  metalness: number;
  wireframe?: boolean;
  downloads: number;
  likes: number;
  creator: string;
}

export type GenerationMode = 'image-to-3d' | 'text-to-3d' | 'multi-view';

export type GenModelVersion = 'Gen-2.5' | 'Gen-2.0' | 'Gen-1.8 Pro';

export type QualityPreset = 'Draft' | 'Standard' | 'High' | 'Ultra 4K';

export interface GenerationConfig {
  mode: GenerationMode;
  prompt: string;
  imageFile?: File | null;
  imagePreviewUrl?: string | null;
  modelVersion: GenModelVersion;
  quality: QualityPreset;
  topology: 'Quad' | 'Tris' | 'Adaptive';
  polyLimit: number;
  pbrTextures: boolean;
  autoRig: boolean;
}

export interface GenerationStep {
  label: string;
  durationMs: number;
  detail: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  credits: string;
  popular?: boolean;
  features: string[];
  cta: string;
}
