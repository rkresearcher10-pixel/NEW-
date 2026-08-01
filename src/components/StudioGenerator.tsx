import React, { useState } from 'react';
import {
  Sparkles,
  Upload,
  Image as ImageIcon,
  Type,
  ChevronDown,
  Wand2,
  SlidersHorizontal,
  Zap,
  CheckCircle2,
  Box,
  Layers,
  Cpu,
  X
} from 'lucide-react';
import { GenerationConfig, GenerationMode, GenModelVersion, QualityPreset } from '../types';
import { InteractiveModelViewer } from './InteractiveModelViewer';

interface StudioGeneratorProps {
  onGenerateSuccess: (newAsset: any) => void;
}

export const StudioGenerator: React.FC<StudioGeneratorProps> = ({ onGenerateSuccess }) => {
  const [config, setConfig] = useState<GenerationConfig>({
    mode: 'image-to-3d',
    prompt: 'A futuristic cybernetic helmet with neon visor and matte black finish, high detail 8k pbr',
    modelVersion: 'Gen-2.5',
    quality: 'High',
    topology: 'Quad',
    polyLimit: 50000,
    pbrTextures: true,
    autoRig: false,
    imagePreviewUrl: null,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [progressStep, setProgressStep] = useState<string>('');
  const [previewModelType, setPreviewModelType] = useState<string>('robot');
  const [primaryColor, setPrimaryColor] = useState<string>('#ec4899');

  const presetPrompts = [
    'Futuristic sci-fi mech helmet with glossy visor',
    'Mythical glowing crystal artifact on ancient stone base',
    'Low-poly stylized isometric floating island with temple',
    'Cyberpunk drone scout vehicle with red LED lights',
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setConfig((prev) => ({
        ...prev,
        imageFile: file,
        imagePreviewUrl: url,
      }));
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    const steps = [
      'Extracting point cloud depth features...',
      'Synthesizing Signed Distance Fields (SDF)...',
      'Generating high-poly Quad mesh topology...',
      'Baking 4K PBR Normal & Roughness maps...',
      'Finalizing 3D asset metadata...',
    ];

    for (let i = 0; i < steps.length; i++) {
      setProgressStep(steps[i]);
      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    setIsGenerating(false);

    const modelTypes = ['robot', 'helmet', 'crystal', 'torusKnot'];
    const chosenType = modelTypes[Math.floor(Math.random() * modelTypes.length)];
    setPreviewModelType(chosenType);

    const newAsset = {
      id: 'gen-' + Date.now(),
      title: config.prompt ? config.prompt.slice(0, 30) + '...' : 'Generated 3D Asset',
      prompt: config.prompt,
      category: 'Sci-Fi' as const,
      thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      polyCount: config.polyLimit,
      format: ['GLTF', 'OBJ', 'FBX', 'USDZ'],
      generationTime: '3.4s',
      modelType: chosenType,
      primaryColor: primaryColor,
      roughness: 0.2,
      metalness: 0.8,
      downloads: 1,
      likes: 1,
      creator: 'You',
    };

    onGenerateSuccess(newAsset);
  };

  return (
    <div className="w-full bg-neutral-900/60 border border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Generation Controls */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-950/80 rounded-2xl border border-white/10 w-fit">
            <button
              id="mode-image-to-3d-btn"
              onClick={() => setConfig({ ...config, mode: 'image-to-3d' })}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                config.mode === 'image-to-3d'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/25'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Image to 3D
            </button>

            <button
              id="mode-text-to-3d-btn"
              onClick={() => setConfig({ ...config, mode: 'text-to-3d' })}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                config.mode === 'text-to-3d'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/25'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Type className="w-4 h-4" />
              Text to 3D
            </button>
          </div>

          {/* Mode 1: Image Upload Box */}
          {config.mode === 'image-to-3d' && (
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center justify-between">
                <span>1. Upload Source Image</span>
                <span className="text-pink-400 text-[11px] font-normal">PNG, JPG, WEBP up to 25MB</span>
              </label>

              <div className="relative group">
                {config.imagePreviewUrl ? (
                  <div className="relative rounded-2xl overflow-hidden border border-purple-500/40 bg-neutral-950 h-48 flex items-center justify-center">
                    <img
                      src={config.imagePreviewUrl}
                      alt="Source preview"
                      className="max-h-full max-w-full object-contain p-2"
                    />
                    <button
                      onClick={() => setConfig({ ...config, imageFile: null, imagePreviewUrl: null })}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-900/90 text-white hover:bg-red-500 transition-colors shadow-lg"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-2 left-3 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs text-emerald-400 flex items-center gap-1.5 border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Image Depth Analyzed
                    </div>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-48 rounded-2xl border-2 border-dashed border-white/15 hover:border-purple-500/60 bg-neutral-950/50 hover:bg-purple-950/10 cursor-pointer transition-all group-hover:shadow-inner">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 text-purple-400 transition-colors mb-3">
                      <Upload className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-neutral-200 group-hover:text-white">
                      Drop your image here or <span className="text-pink-400 underline underline-offset-4">browse</span>
                    </span>
                    <span className="text-xs text-neutral-500 mt-1">
                      Works best with isolated objects or clean backgrounds
                    </span>
                    <input
                      id="image-to-3d-input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
          )}

          {/* Prompt Input Box */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center justify-between">
              <span>{config.mode === 'image-to-3d' ? '2. Refine with Prompt (Optional)' : '1. Enter 3D Prompt'}</span>
              <span className="text-neutral-500 text-[11px] font-normal">Detailed prompts yield richer PBR textures</span>
            </label>

            <div className="relative">
              <textarea
                id="generation-prompt-textarea"
                rows={3}
                value={config.prompt}
                onChange={(e) => setConfig({ ...config, prompt: e.target.value })}
                placeholder="e.g. A hyper-realistic mech warrior, sci-fi helmet, glowing cyan lights..."
                className="w-full rounded-2xl bg-neutral-950/90 border border-white/15 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 p-4 text-sm text-white placeholder-neutral-500 resize-none outline-none transition-all"
              />
              <div className="absolute bottom-3 right-3 text-xs text-neutral-500 font-mono">
                {config.prompt.length} chars
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {presetPrompts.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setConfig({ ...config, prompt: preset })}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-neutral-300 hover:text-white transition-colors border border-white/5"
                >
                  + {preset.slice(0, 24)}...
                </button>
              ))}
            </div>
          </div>

          {/* Generator Parameters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-neutral-950/60 rounded-2xl border border-white/10">
            {/* Engine Version */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] text-neutral-400 font-medium flex items-center gap-1">
                <Cpu className="w-3 h-3 text-purple-400" />
                AI Model
              </span>
              <select
                id="select-model-version"
                value={config.modelVersion}
                onChange={(e) => setConfig({ ...config, modelVersion: e.target.value as GenModelVersion })}
                className="bg-neutral-900 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white outline-none focus:border-purple-500"
              >
                <option value="Gen-2.5">Gen-2.5 (Fastest)</option>
                <option value="Gen-2.0">Gen-2.0 (Stable)</option>
                <option value="Gen-1.8 Pro">Gen-1.8 Pro</option>
              </select>
            </div>

            {/* Topology */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] text-neutral-400 font-medium flex items-center gap-1">
                <Box className="w-3 h-3 text-pink-400" />
                Mesh Mesh Topology
              </span>
              <select
                id="select-topology"
                value={config.topology}
                onChange={(e) => setConfig({ ...config, topology: e.target.value as any })}
                className="bg-neutral-900 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white outline-none focus:border-pink-500"
              >
                <option value="Quad">Quad Mesh</option>
                <option value="Tris">Tris (Game Engine)</option>
                <option value="Adaptive">Adaptive Resolution</option>
              </select>
            </div>

            {/* Accent Color Override */}
            <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-neutral-400 font-medium flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-cyan-400" />
                Color Theme
              </span>
              <div className="flex items-center gap-2">
                <input
                  id="color-picker-input"
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-7 h-7 rounded-lg bg-transparent cursor-pointer border-0"
                />
                <span className="text-xs font-mono text-neutral-300">{primaryColor}</span>
              </div>
            </div>
          </div>

          {/* Action Button: Generate */}
          <button
            id="generate-3d-model-btn"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-semibold text-base shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                <span>{progressStep || 'Generating 3D Asset...'}</span>
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>GENERATE 3D MODEL</span>
                <span className="text-xs font-mono bg-black/30 px-2 py-0.5 rounded-md text-pink-200 ml-1">
                  ~3.5s
                </span>
              </>
            )}
          </button>
        </div>

        {/* Right Column: Live Viewport Preview */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
              <Box className="w-4 h-4 text-pink-400" />
              Real-time Viewport
            </span>
            <span className="text-xs text-neutral-500">Rotate & Zoom to Inspect</span>
          </div>

          <div className="h-[380px] sm:h-[420px]">
            <InteractiveModelViewer
              modelType={previewModelType}
              primaryColor={primaryColor}
              isGenerating={isGenerating}
            />
          </div>

          {/* Specs breakdown card */}
          <div className="p-4 bg-neutral-950/60 border border-white/10 rounded-2xl text-xs text-neutral-400 flex items-center justify-between font-mono">
            <div>
              <span className="text-neutral-500 block">Est. Polygons</span>
              <span className="text-white font-semibold">52,480 Quads</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="text-neutral-500 block">Texture Map</span>
              <span className="text-emerald-400 font-semibold">4K PBR Albedo+Norm</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="text-neutral-500 block">Export Formats</span>
              <span className="text-pink-400 font-semibold">GLTF / OBJ / FBX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
