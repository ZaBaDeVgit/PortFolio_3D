"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[1, 64, 64]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={1.5}>
      <Torus position={position} args={[0.6, 0.2, 16, 100]}>
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} />
      </Torus>
    </Float>
  );
}

function FloatingCube({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  return (
    <Float speed={speed} rotationIntensity={3} floatIntensity={1}>
      <Box position={position} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.85} />
      </Box>
    </Float>
  );
}

function ParticleField() {
  const count = 500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    
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
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff1b00" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a2fbd" />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />
      
      <AnimatedSphere position={[-3, 1, -2]} color="#ff1b00" speed={1.5} scale={0.8} />
      <AnimatedSphere position={[3, -1, -3]} color="#4a2fbd" speed={1} scale={0.6} />
      <AnimatedSphere position={[0, 2, -4]} color="#fb4a02" speed={2} scale={0.4} />
      
      <FloatingTorus position={[-2, -2, -1]} color="#ff1b00" speed={1.2} />
      <FloatingTorus position={[2.5, 1.5, -2]} color="#4a2fbd" speed={0.8} />
      
      <FloatingCube position={[1, -1.5, -1]} color="#ff1b00" speed={1.8} />
      <FloatingCube position={[-1.5, 0.5, -3]} color="#4a2fbd" speed={1.4} />
      
      <ParticleField />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
