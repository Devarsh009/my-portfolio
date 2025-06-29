'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import PolyhedronMesh from './PolyhedronMesh'

type Props = {
  position: [number, number, number]
}

export default function Polyhedron({ position }: Props) {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group position={position} ref={groupRef}>
      <PolyhedronMesh />
    </group>
  )
}
