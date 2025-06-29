'use client'
import { Canvas } from '@react-three/fiber'
import IcosaScene from './IcosaScene'
import { Suspense, useState, useEffect } from 'react'
import ErrorBoundary from './ErrorBoundary'

export default function PolyhedronScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-full bg-gray-900" />
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="w-full h-full bg-gray-900" />}>
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <IcosaScene />
        </Canvas>
      </Suspense>
    </ErrorBoundary>
  )
}
