'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Mesh } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function Sculpture({ playing }: { playing: boolean }) {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const { camera, gl, invalidate } = useThree();
  const controls = useRef<OrbitControls | null>(null);
  const elapsed = useRef(0);

  useEffect(() => {
    const orbit = new OrbitControls(camera, gl.domElement);
    orbit.enableZoom = false;
    orbit.enablePan = false;
    orbit.enableDamping = false;
    orbit.rotateSpeed = 0.55;
    orbit.minPolarAngle = Math.PI / 3;
    orbit.maxPolarAngle = (Math.PI * 2) / 3;
    const onChange = () => invalidate();
    orbit.addEventListener('change', onChange);
    controls.current = orbit;
    return () => {
      orbit.removeEventListener('change', onChange);
      orbit.dispose();
    };
  }, [camera, gl, invalidate]);

  useFrame((state, delta) => {
    if (!group.current || !playing) return;
    elapsed.current += Math.min(delta, 0.05);
    group.current.rotation.y = elapsed.current * 0.16;
    group.current.rotation.z = -0.35 + Math.sin(elapsed.current * 0.22) * 0.08;
    group.current.position.y = Math.sin(elapsed.current * 0.6) * 0.07;
    group.current.rotation.x = state.pointer.y * 0.07;
  });

  return (
    <group ref={group} rotation={[0, 0, -0.35]}>
      <mesh ref={core} rotation={[0.3, 0.2, 0]}>
        <torusKnotGeometry args={[1.38, 0.49, 224, 40, 2, 3]} />
        <meshPhysicalMaterial
          color="#343e2c"
          metalness={0.72}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.22}
        />
      </mesh>
    </group>
  );
}

export default function SculptureCanvas({ playing }: { playing: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.7], fov: 40 }}
      dpr={[1, 1.5]}
      frameloop={playing ? 'always' : 'demand'}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      fallback={<div className="sculpture-fallback" />}
      aria-label="Escultura tridimensional de un nudo infinito; arrastra para girarla"
      role="img"
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[-3, 5, 3]} intensity={5} color="#e7f1d7" />
      <directionalLight position={[4, -1, 2]} intensity={6} color="#b9f168" />
      <pointLight position={[-4, -2, -1]} intensity={50} color="#caff77" />
      <pointLight position={[1, 4, -3]} intensity={60} color="#ffffff" />
      <Sculpture playing={playing} />
    </Canvas>
  );
}
