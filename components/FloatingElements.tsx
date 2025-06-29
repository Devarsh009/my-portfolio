'use client'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Group } from 'three'

interface FloatingElementsProps {
  mouse: { x: number; y: number }
}

function WireframeIcosahedron({ basePosition, color, scale, speed, float = 0, parallax = 0, mouse }: { basePosition: [number, number, number], color: string, scale: number, speed: number, float?: number, parallax?: number, mouse: { x: number; y: number } }) {
  const meshRef = useRef<Group>(null)
  const { size } = useThree()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.003
      meshRef.current.rotation.y += speed * 0.002
      // Floating
      let y = basePosition[1]
      let x = basePosition[0]
      if (float) y += Math.sin(state.clock.elapsedTime * float) * 0.4
      // Mouse parallax (both x and y)
      if (parallax) {
        const mult = 5
        x += (mouse.x || 0) * parallax * mult
        y += (mouse.y || 0) * parallax * mult
      }
      meshRef.current.position.set(x, y, basePosition[2])
    }
  })
  return (
    <group scale={scale} ref={meshRef}>
      <mesh>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} wireframe />
        {/* Glow effect */}
        <mesh>
          <icosahedronGeometry args={[1.01, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
        </mesh>
      </mesh>
    </group>
  )
}

function WireframeCube({ basePosition, color, scale, speed, float = 0, parallax = 0, mouse }: { basePosition: [number, number, number], color: string, scale: number, speed: number, float?: number, parallax?: number, mouse: { x: number; y: number } }) {
  const meshRef = useRef<Group>(null)
  const { size } = useThree()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.002
      meshRef.current.rotation.y += speed * 0.003
      // Floating
      let y = basePosition[1]
      let x = basePosition[0]
      if (float) y += Math.cos(state.clock.elapsedTime * float) * 0.3
      // Mouse parallax (both x and y)
      if (parallax) {
        const mult = 4.5
        x += (mouse.x || 0) * parallax * mult
        y += (mouse.y || 0) * parallax * mult
      }
      meshRef.current.position.set(x, y, basePosition[2])
    }
  })
  return (
    <group scale={scale} ref={meshRef}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={color} wireframe />
        {/* Glow effect */}
        <mesh>
          <boxGeometry args={[1.01, 1.01, 1.01]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
        </mesh>
      </mesh>
    </group>
  )
}

function WireframeOctahedron({ basePosition, color, scale, speed, opacity = 1, float = 0, parallax = 0, mouse }: { basePosition: [number, number, number], color: string, scale: number, speed: number, opacity?: number, float?: number, parallax?: number, mouse: { x: number; y: number } }) {
  const meshRef = useRef<Group>(null)
  const { size } = useThree()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.002
      meshRef.current.rotation.y += speed * 0.002
      // Floating
      let y = basePosition[1]
      let x = basePosition[0]
      if (float) y += Math.sin(state.clock.elapsedTime * float) * 0.25
      // Mouse parallax (both x and y)
      if (parallax) {
        const mult = 3.5
        x += (mouse.x || 0) * parallax * mult
        y += (mouse.y || 0) * parallax * mult
      }
      meshRef.current.position.set(x, y, basePosition[2])
    }
  })
  return (
    <group scale={scale} ref={meshRef}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
        {/* Glow effect */}
        <mesh>
          <octahedronGeometry args={[1.01, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.12 * opacity} />
        </mesh>
      </mesh>
    </group>
  )
}

export default function FloatingElements({ mouse }: FloatingElementsProps) {
  const { size } = useThree()
  const isMobile = size.width < 700
  // Move the group further back (z = -5) and offset shapes to frame the text
  return (
    <group position={[0, 0, -5]}>
      {/* Central subtle icosahedron behind text */}
      <WireframeIcosahedron 
        basePosition={[0, 0, -2]} 
        color="#38bdf8" 
        scale={isMobile ? 1.1 : 2.2} 
        speed={0.7} 
        float={0.3}
        parallax={0.1}
        mouse={mouse}
      />
      {/* Large magenta icosahedron, top-right, floating, mouse parallax */}
      <WireframeIcosahedron 
        basePosition={isMobile ? [4.5, 2.8, -1] : [7, 4, -1]} 
        color="#e6007a" 
        scale={isMobile ? 1.2 : 2.5} 
        speed={1.2} 
        float={0.5}
        parallax={0.8}
        mouse={mouse}
      />
      {/* Medium cyan cube, bottom-left, floating, mouse parallax */}
      <WireframeCube 
        basePosition={isMobile ? [-4.5, -2.8, -1] : [-7, -4, -1]} 
        color="#14b8a6" 
        scale={isMobile ? 1.1 : 2.2} 
        speed={1.1} 
        float={0.7}
        parallax={0.7}
        mouse={mouse}
      />
      {/* Small muted yellow octahedron, background, left-center, lower opacity, floating, mouse parallax */}
      <WireframeOctahedron 
        basePosition={isMobile ? [-2.2, 1.2, -2] : [-3.5, 1.8, -2]} 
        color="#eab308" 
        scale={isMobile ? 0.7 : 1.3} 
        speed={1.4} 
        opacity={0.5}
        float={0.9}
        parallax={0.5}
        mouse={mouse}
      />
    </group>
  )
} 