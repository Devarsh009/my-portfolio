'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function SimpleBox() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function SimpleTest() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SimpleBox />
      </Canvas>
    </div>
  )
} 