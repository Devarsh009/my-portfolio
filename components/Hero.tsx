'use client'
import { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import TypingRoles from './TypingRoles'
import SocialIcons from './SocialIcons'
import Button from './ui/Button'

// Dynamically import 3D components
const ThreeScene = dynamic(() => import('./ThreeScene'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-black" />
})

export default function Hero({ id }: { id?: string }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  return (
    <section id={id} className="relative min-h-screen w-full overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />}>
        <ThreeScene mouse={mouse} setMouse={setMouse} />
      </Suspense>
      <div
        className="absolute inset-0 z-20"
        style={{ cursor: 'pointer', background: 'transparent' }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
          setMouse({ x, y });
        }}
        onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      />
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/50 via-black/30 to-black/80 pointer-events-none" />
      <div className="relative z-40 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-20 text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
          AI Systems · RAG · Backend ML
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
          Devarsh Radadia
        </h1>
        <div className="mt-4 text-lg text-white/70 sm:text-xl">
          <TypingRoles />
        </div>
        <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
          I design production grade AI systems from FDA scale ETL pipelines to RAG agents and ML backed platforms that ship reliably.
          Yes, reliability is the boring part. It is also the part that keeps the pager silent.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="#projects">View projects</Button>
          <Button href="#resume" variant="outline">
            View resume
          </Button>
          <Button href="https://github.com/Devarsh009" variant="ghost">
            GitHub
          </Button>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Based in India · IST
          </div>
        </div>
        <div className="mt-10">
          <SocialIcons align="left" />
        </div>
      </div>
    </section>
  )
}
