'use client';

import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import * as THREE from 'three';

type Props = {
  position: [number, number, number];
  color: string;
};

export default function Polyhedron({ position, color }: Props) {
  // Use a type assertion to satisfy framer-motion-3d's ref expectations
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <motion.mesh
      ref={meshRef as React.MutableRefObject<any>} // Type assertion for compatibility
      position={position}
    >
      <dodecahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial color={color} flatShading />
    </motion.mesh>
  );
}