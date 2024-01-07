import React from 'react';
import styles from './Canvas.module.scss';
import Cube from '@components/cubeModel/Cube';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

import { Suspense } from 'react';
const Gcanvas: React.FC = () => {
  return (
    <div className={styles.canvasCnt}>
      <Canvas shadows camera={{ position: [5, 0, 0] }}>
        <spotLight
          intensity={0.4}
          angle={0.2}
          penumbra={1}
          position={[0, 0, 2]}
          castShadow
        />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Gcanvas;
