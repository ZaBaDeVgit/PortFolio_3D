"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.2}>
      <Sphere ref={meshRef} position={position} args={[1, 32, 32]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.5}
          metalness={0.6}
          transparent
          opacity={0.25}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={0.8}>
      <Torus position={position} args={[0.5, 0.15, 16, 64]}>
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.7} transparent opacity={0.2} />
      </Torus>
    </Float>
  );
}

function ParticleField() {
  const count = 300;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    
    const isRed = Math.random() > 0.5;
    colors[i * 3] = isRed ? 1 : 0.29;
    colors[i * 3 + 1] = isRed ? 0.11 : 0.18;
    colors[i * 3 + 2] = isRed ? 0 : 0.74;
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
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#ff1b00" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#4a2fbd" />
      
      {/* Subtle spheres far back */}
      <AnimatedSphere position={[-4, 2, -5]} color="#ff1b00" speed={1} scale={0.6} />
      <AnimatedSphere position={[4, -1, -6]} color="#4a2fbd" speed={0.8} scale={0.5} />
      <AnimatedSphere position={[0, 3, -7]} color="#fb4a02" speed={1.2} scale={0.3} />
      
      {/* Subtle torus */}
      <FloatingTorus position={[-3, -2, -4]} color="#ff1b00" speed={0.8} />
      <FloatingTorus position={[3, 1.5, -5]} color="#4a2fbd" speed={0.6} />
      
      {/* Particles */}
      <ParticleField />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      {/* Dark overlay to ensure content readability */}
      <div className="absolute inset-0 bg-[#0a0a0a]/70" />
    </div>
  );
}
