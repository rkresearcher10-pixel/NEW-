import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Maximize2, RotateCcw, Eye, Layers, Sparkles } from 'lucide-react';

interface InteractiveViewerProps {
  modelType: string;
  primaryColor?: string;
  wireframe?: boolean;
  roughness?: number;
  metalness?: number;
  isGenerating?: boolean;
  autoRotate?: boolean;
}

function DynamicModel({
  modelType,
  primaryColor = '#a855f7',
  wireframe = false,
  roughness = 0.3,
  metalness = 0.7,
}: {
  modelType: string;
  primaryColor?: string;
  wireframe?: boolean;
  roughness?: number;
  metalness?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  switch (modelType) {
    case 'robot':
      return (
        <group ref={meshRef as any}>
          {/* Main Core */}
          <mesh position={[0, 0, 0]}>
            <octahedronGeometry args={[1.1, 2]} />
            <meshStandardMaterial
              color={primaryColor}
              wireframe={wireframe}
              roughness={roughness}
              metalness={metalness}
            />
          </mesh>
          {/* Inner Glowing Core */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#0284c7"
              emissiveIntensity={1.5}
            />
          </mesh>
          {/* Floating Ring */}
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[1.6, 0.08, 16, 64]} />
            <meshStandardMaterial color="#ec4899" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      );

    case 'helmet':
      return (
        <group ref={meshRef as any}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.75]} />
            <meshStandardMaterial
              color={primaryColor}
              wireframe={wireframe}
              roughness={roughness}
              metalness={metalness}
            />
          </mesh>
          <mesh position={[0, 0.2, 0.6]} rotation={[0.2, 0, 0]}>
            <boxGeometry args={[1.2, 0.5, 0.4]} />
            <meshStandardMaterial
              color="#0ea5e9"
              metalness={0.95}
              roughness={0.05}
              transparent
              opacity={0.85}
            />
          </mesh>
        </group>
      );

    case 'crystal':
      return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh ref={meshRef} position={[0, 0, 0]}>
            <coneGeometry args={[1, 2.2, 5]} />
            <MeshDistortMaterial
              color={primaryColor}
              wireframe={wireframe}
              distort={0.15}
              speed={1.5}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>
      );

    case 'torusKnot':
    default:
      return (
        <Float speed={1.5} rotationIntensity={0.8}>
          <mesh ref={meshRef} position={[0, 0, 0]}>
            <torusKnotGeometry args={[0.9, 0.32, 128, 32]} />
            <meshStandardMaterial
              color={primaryColor}
              wireframe={wireframe}
              roughness={roughness}
              metalness={metalness}
            />
          </mesh>
        </Float>
      );
  }
}

export const InteractiveModelViewer: React.FC<InteractiveViewerProps> = ({
  modelType,
  primaryColor = '#f43f5e',
  wireframe = false,
  roughness = 0.3,
  metalness = 0.7,
  isGenerating = false,
  autoRotate = true,
}) => {
  const [showWireframe, setShowWireframe] = useState(wireframe);
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className="relative w-full h-full min-h-[360px] rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 border border-white/10 shadow-2xl overflow-hidden group">
      {/* 3D Canvas */}
      <Canvas
        key={resetKey}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -2]} intensity={0.8} color="#f43f5e" />
        <pointLight position={[0, 3, 3]} intensity={1.2} color="#a855f7" />

        <Stage intensity={0.5} environment="city" adjustCamera={false}>
          <DynamicModel
            modelType={modelType}
            primaryColor={primaryColor}
            wireframe={showWireframe}
            roughness={roughness}
            metalness={metalness}
          />
        </Stage>

        <OrbitControls
          enableZoom={true}
          maxDistance={8}
          minDistance={2}
          autoRotate={autoRotate && !isGenerating}
          autoRotateSpeed={1.5}
        />
      </Canvas>

      {/* Loading Overlay when generating */}
      {isGenerating && (
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
          <div className="relative w-20 h-20 mb-4">
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
            <div className="absolute inset-2 rounded-full border-2 border-pink-500/20 border-b-pink-500 animate-spin [animation-duration:1.5s]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
            </div>
          </div>
          <h4 className="text-lg font-semibold text-white tracking-wide">Synthesizing 3D Geometry...</h4>
          <p className="text-xs text-neutral-400 mt-1 max-w-xs">Applying neural NeRF rendering and PBR texture mapping</p>
        </div>
      )}

      {/* Controls HUD */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 pointer-events-auto bg-neutral-900/80 backdrop-blur-md p-1.5 rounded-xl border border-white/10 shadow-lg">
          <button
            id="toggle-wireframe-btn"
            onClick={() => setShowWireframe(!showWireframe)}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              showWireframe
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
            title="Toggle Wireframe Mode"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Wireframe</span>
          </button>

          <button
            id="reset-camera-btn"
            onClick={() => setResetKey((k) => k + 1)}
            className="p-2 rounded-lg text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            title="Reset Viewpoint"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pointer-events-auto bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          3D Viewport Live
        </div>
      </div>
    </div>
  );
};
