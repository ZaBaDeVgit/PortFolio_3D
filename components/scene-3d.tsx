"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere ref={meshRef} position={position} args={[1, 32, 32]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.2}
          speed={1}
          roughness={0.8}
          metalness={0.3}
          transparent
          opacity={0.08}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={0.5}>
      <Torus position={position} args={[0.4, 0.1, 16, 48]}>
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.3} transparent opacity={0.06} />
      </Torus>
    </Float>
  );
}

function ParticleField() {
  const count = 150;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }
  
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.15} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight position={[10, 10, 10]} intensity={0.15} color="#ff1b00" />
      <pointLight position={[-10, -10, -10]} intensity={0.08} color="#4a2fbd" />
      
      <AnimatedSphere position={[-4, 2, -6]} color="#ff1b00" speed={0.6} scale={0.5} />
      <AnimatedSphere position={[4, -1, -7]} color="#4a2fbd" speed={0.5} scale={0.4} />
      <AnimatedSphere position={[0, 3, -8]} color="#fb4a02" speed={0.8} scale={0.3} />
      
      <FloatingTorus position={[-3, -2, -5]} color="#ff1b00" speed={0.5} />
      <FloatingTorus position={[3, 1.5, -6]} color="#4a2fbd" speed={0.4} />
      
      <ParticleField />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1]}
        gl={{ antialias: false, alpha: true }}
      >
        <Scene />
      </Canvas>
      {/* Heavy dark overlay so content is perfectly readable */}
      <div className="absolute inset-0 bg-[#0a0a0a]/85" />
    </div>
  );
}
