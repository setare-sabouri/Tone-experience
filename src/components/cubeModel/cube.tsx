import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
interface CubeProps {
  modelUrl: string;
}

function Cube(props: CubeProps): JSX.Element {
  console.log('hereeeeeeeeeeeeeeeeee');

  const { modelUrl } = props;
  const { nodes } = useGLTF('/models/nike.glb');

  return <p> k</p>;
}

export default Cube;
