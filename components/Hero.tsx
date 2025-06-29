'use client'
import { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import 3D components
const ThreeScene = dynamic(() => import('./ThreeScene'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-black" />
})

export default function Hero({ id }: { id?: string }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  return (
    <section id={id} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-black" />}>
        <ThreeScene mouse={mouse} setMouse={setMouse} />
      </Suspense>
      {/* Transparent Mouse Overlay for Parallax */}
      <div
        className="absolute inset-0 z-20"
        style={{ cursor: 'pointer', background: 'transparent' }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
          setMouse({ x, y });
        }}
        onMouseEnter={e => {
          // Optionally, could do something on enter
        }}
        onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      />
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/30 z-30 pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-4 pointer-events-auto">
        <h1 className="font-extrabold text-white mb-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[90vw] leading-tight drop-shadow-lg" style={{wordBreak:'break-word'}}>
          Devarsh Radadia
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 max-w-xl mx-auto font-semibold tracking-wide">
          A passionate pre-final year developer
        </p>
        <div className="text-sm sm:text-lg md:text-xl text-white/70 italic max-w-lg mx-auto mt-4 mb-2 font-light">
          Pushing the edge where code thinks, learns, and speaks — exploring AI, ML and LLMS
        </div>
      </div>
    </section>
  )
}
