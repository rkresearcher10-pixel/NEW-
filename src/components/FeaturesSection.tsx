import React from 'react';
import { Sparkles, Zap, ShieldCheck, Box, Cpu, Layers, Globe, Code2, RefreshCw } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Neural NeRF & SDF Engine',
      description: 'Generates tight, watertight 3D meshes using Signed Distance Fields with clean Quad topology ready for game production.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Layers,
      title: 'Automatic PBR Texture Baking',
      description: 'Extracts 4K Albedo, Normal, Roughness, and Metallic maps automatically from text prompts or single reference photos.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Box,
      title: 'Universal 3D Export Formats',
      description: 'Seamlessly export to GLTF, OBJ, FBX, and USDZ with embedded materials for Blender, Unity, Unreal Engine 5, or WebGL.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Sub-4-Second Generation',
      description: 'Leverages Cloud TPU acceleration to turn complex prompts into downloadable 3D models in under 4 seconds.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: RefreshCw,
      title: 'Smart Mesh Decimation',
      description: 'Dial polycount from 5k low-poly for mobile WebXR up to 200k high-poly film assets with zero geometric loss.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Code2,
      title: 'Developer API Integration',
      description: 'Integrate text-to-3D directly into your game development pipeline or e-commerce stack via REST and GraphQL endpoints.',
      color: 'from-fuchsia-500 to-purple-600',
    },
  ];

  return (
    <div id="features" className="w-full py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono font-semibold text-pink-400 uppercase tracking-widest px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
          Next-Gen 3D Synthesis
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Engineered for Game Devs, Designers & Creators
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-3">
          Hyper3D eliminates hours of manual 3D modeling. Experience studio-grade assets created instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-pink-500/40 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 group shadow-lg hover:shadow-purple-500/10"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feat.color} p-2.5 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                {feat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
