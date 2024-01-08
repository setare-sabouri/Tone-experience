import React from "react";
import styles from "./Canvas.module.scss";
import Cube from "@components/cubeModel/Cube";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

import { Suspense } from "react";
const Gcanvas: React.FC = () => {
  const { scale } = useControls({
    scale: {
      value: -0.8,
      min: -0.88,
      max: 0,
    },
  });

  return (
    <div className={styles.canvasCnt}>
      <Canvas shadows camera={{ position: [5, 0, 0] }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <spotLight
          intensity={0.4}
          angle={0.2}
          penumbra={1}
          position={[0, 0, 2]}
          castShadow
        />
        <Suspense fallback={null}>
          <Cube scale={scale} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Gcanvas;
