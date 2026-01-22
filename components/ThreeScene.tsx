'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import FloatingElements from './FloatingElements'

interface ThreeSceneProps {
  mouse: { x: number; y: number }
  setMouse: (pos: { x: number; y: number }) => void
}

export default function ThreeScene({ mouse, setMouse }: ThreeSceneProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        onPointerMove={e => {
          if (!hovered) return;
          const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
          setMouse({ x, y });
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => {
          setHovered(false);
          setMouse({ x: 0, y: 0 });
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4f46e5" />
        <Suspense fallback={null}>
          <FloatingElements mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  )
} 