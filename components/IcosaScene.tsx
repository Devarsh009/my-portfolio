'use client'
import { useMemo } from 'react'
import Polyhedron from './Polyhedron'

export default function IcosaScene() {
  const positions = useMemo<[number, number, number][]>(() => [
    [-4, 2, 0],
    [4, 2, 0],
    [-4, -2, 0],
    [4, -2, 0],
    [-2, 0, -4],
    [2, 0, -4]
  ], [])

  return (
    <>
      {positions.map((pos, index) => (
      <Polyhedron key={index} position={pos} />
      ))}
    </>
  )
}
