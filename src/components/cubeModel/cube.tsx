import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import type { Group, Mesh, MeshBasicMaterial } from 'three';

export const Cube = () => {
  const [model, setModel] = useState<Group | null>(null);
  const [materials, setMaterials] = useState<Record<
    string,
    MeshBasicMaterial
  > | null>(null);
  const [nodes, setNodes] = useState<Record<string, Mesh> | null>(null);

  useEffect(() => {
    if (model) {
      const { materials, nodes } = model;
      setMaterials(materials || null);
      setNodes(nodes || null);
    }
  }, [model]);

  useEffect(() => {
    setModel(useGLTF('/models/cube.glb'));
  }, []);

  return (
    <>
      <group dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          {nodes &&
            nodes.Plane005_0 &&
            nodes.Plane005_0.geometry &&
            materials && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005_0.geometry}
                material={materials['Material.006']}
                position={[-1.004, 0.014, -0.014]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.882}
              />
            )}

          {nodes &&
            nodes.Plane004_0 &&
            nodes.Plane004_0.geometry &&
            materials && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane004_0.geometry}
                material={materials['Material.005']}
                position={[1.006, 0.014, -0.014]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.882}
              />
            )}

          {nodes &&
            nodes.Plane003_0 &&
            nodes.Plane003_0.geometry &&
            materials && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003_0.geometry}
                material={materials['Material.004']}
                position={[0, 0.014, -1.009]}
                scale={0.882}
              />
            )}

          {nodes &&
            nodes.Plane002_0 &&
            nodes.Plane002_0.geometry &&
            materials && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002_0.geometry}
                material={materials['Material.003']}
                position={[0, 1.002, 0.014]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.882}
              />
            )}

          {nodes &&
            nodes.Plane001_0 &&
            nodes.Plane001_0.geometry &&
            materials && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials['Material.002']}
                position={[0, -0.013, 1.003]}
                rotation={[-Math.PI, 0, 0]}
                scale={0.882}
              />
            )}

          {nodes && nodes.Cube_0 && nodes.Cube_0.geometry && materials && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_0.geometry}
              material={materials.Material}
            />
          )}

          {nodes && nodes.Plane_0 && nodes.Plane_0.geometry && materials && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_0.geometry}
              material={materials['Material.001']}
              position={[0, -1.001, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.882}
            />
          )}
        </group>
      </group>
    </>
  );
};

export default Cube;
useGLTF.preload('/models/cube.glb');
