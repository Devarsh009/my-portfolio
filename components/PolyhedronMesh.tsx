'use client'
import { Icosahedron } from './Icosahedron'

type Props = {
  position?: [number, number, number];
  color?: string;
};

export default function PolyhedronMesh({ position = [0, 0, 0], color = "#fff" }: Props) {
  return (
    <Icosahedron position={position} color={color} />
  );
}