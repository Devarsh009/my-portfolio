'use client'

type Props = {
  position?: [number, number, number]
  color?: string
}

export function Icosahedron({ position = [0, 0, 0], color = '#4f46e5' }: Props) {
  return (
    <mesh position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
