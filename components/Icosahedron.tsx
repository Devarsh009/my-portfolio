'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, Mesh } from 'three';
import { useState } from 'react';

interface Props {
  position: [number, number, number];
  color: string;
}

export default function Icosahedron({ position, color }: Props) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;

      // Rotate slowly
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.3 : 1}
    >
      <icosahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={hovered ? color : '#000000'}
        emissiveIntensity={hovered ? 0.7 : 0.2}
        roughness={0.2}
        metalness={0.6}
      />
    </mesh>
  );
}
