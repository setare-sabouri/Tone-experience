// ModelKey.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text3D } from "@react-three/drei";




const ModelKey= ({
  note,
  keyLabel,
  isBlack,
  active,
  onClick,
  position,
}) => {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = active ? -0.1 : 0;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => onClick(note)}
      rotation={[0.5, 0, 0]}
    >
      <RoundedBox
        args={isBlack ? [0.7, 0.3, 1.5] : [0.7, 0.3, 3]} // width, height, depth
        radius={0.07}
      >
        <meshStandardMaterial
          attach="material"
          color={active ? "hotpink" : isBlack ? "black" : "white"}
        />
      </RoundedBox>

      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        size={0.3}
        height={0.05}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}
        position={[-0.11, 0.2, isBlack ? -0.4 : -1.1]}
        rotation={[-0.8, 0, 0]}
        
      >
        {keyLabel}
        <meshStandardMaterial color={isBlack ? "white" : "black"} />
      </Text3D>
    </mesh>
  );
};

export default ModelKey;
