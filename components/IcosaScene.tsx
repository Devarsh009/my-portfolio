'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function IcosahedronMesh({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ mouse }) => {
    if (ref.current && hovered) {
      ref.current.rotation.x = mouse.y * Math.PI;
      ref.current.rotation.y = mouse.x * Math.PI;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

export default function IcosaScene() {
  const colors = ['#facc15', '#0ea5e9', '#e879f9', '#22d3ee', '#a3e635', '#f59e0b'];
  const positions: [number, number, number][] = [
    [-3, 1.5, 0], [0, 1.5, 0], [3, 1.5, 0],
    [-3, -1.5, 0], [0, -1.5, 0], [3, -1.5, 0],
  ];

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight />
      {positions.map((pos, i) => (
        <IcosahedronMesh key={i} position={pos} color={colors[i]} />
      ))}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
