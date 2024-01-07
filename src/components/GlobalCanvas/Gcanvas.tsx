import React from 'react';

import Cube from '@components/cubeModel/Cube';
import { Canvas } from 'react-three-fiber';
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from '@react-three/drei';

import { Suspense } from 'react';
const Gcanvas: React.FC = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [2, 0, 0] }}>
        <spotLight
          intensity={0.4}
          angle={0.2}
          penumbra={1}
          position={[0, 0, 2]}
          castShadow
        />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <ContactShadows
          position={[0, -0.6, 0]}
          opacity={0.5}
          scale={8}
          blur={2}
          far={2}
          color={'#FFEF32'}
        />{' '}
        {/*yellow*/}
        <ContactShadows
          position={[0, -0.6, 0]}
          opacity={0.7}
          scale={8}
          blur={3}
          far={0.9}
          color={'#120099'}
        />{' '}
        {/* blue */}
        <directionalLight castShadow color={'red'} far={5} />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Gcanvas;
