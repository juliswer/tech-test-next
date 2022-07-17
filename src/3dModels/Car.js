import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Car({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/car.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.6, -1.89]} scale={0.01}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.rearlight}
            />
          </group>
          <group position={[0, 0.6, -1.89]} scale={0.01}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.rearlight}
            />
          </group>
          <group position={[-0.52, 0.71, -1.9]} scale={0.01}>
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.chrome}
            />
          </group>
          <group position={[-0.53, 0.71, -1.9]} scale={0.01}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.interior_second}
            />
          </group>
          <group position={[-0.53, 0.71, -1.9]} scale={0.01}>
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.chrome}
            />
          </group>
          <group position={[0, 0.31, -1.9]} scale={0.01}>
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.black}
            />
          </group>
          <group
            position={[-0.66, 0.32, 1.34]}
            rotation={[Math.PI / 2, -0.02, 0]}
          >
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
              <mesh
                geometry={nodes.Object_17.geometry}
                material={materials.tire}
              />
              <mesh
                geometry={nodes.Object_18.geometry}
                material={materials.tire}
              />
              <mesh
                geometry={nodes.Object_19.geometry}
                material={materials.tire}
              />
              <mesh
                geometry={nodes.Object_20.geometry}
                material={materials.chrome}
              />
              <mesh
                geometry={nodes.Object_21.geometry}
                material={materials.chrome}
              />
              <mesh
                geometry={nodes.Object_22.geometry}
                material={materials.headglass}
              />
              <mesh
                geometry={nodes.Object_23.geometry}
                material={materials.interior_second}
              />
              <mesh
                geometry={nodes.Object_24.geometry}
                material={materials.clearglass}
              />
              <mesh
                geometry={nodes.Object_25.geometry}
                material={materials.interior}
              />
              <mesh
                geometry={nodes.Object_26.geometry}
                material={materials.mirror}
              />
              <mesh
                geometry={nodes.Object_27.geometry}
                material={materials.carpaint}
              />
              <mesh
                geometry={nodes.Object_28.geometry}
                material={materials.carpaint}
              />
              <mesh
                geometry={nodes.Object_29.geometry}
                material={materials.rearlight}
              />
              <mesh
                geometry={nodes.Object_30.geometry}
                material={materials.leather1}
              />
              <mesh
                geometry={nodes.Object_31.geometry}
                material={materials.black1}
              />
              <mesh
                geometry={nodes.Object_32.geometry}
                material={materials.black}
              />
              <mesh
                geometry={nodes.Object_33.geometry}
                material={materials.material}
              />
              <mesh
                geometry={nodes.Object_34.geometry}
                material={materials.windowglass}
              />
              <mesh
                geometry={nodes.Object_35.geometry}
                material={materials.leather2}
              />
              <mesh
                geometry={nodes.Object_36.geometry}
                material={materials.leather3}
              />
              <mesh
                geometry={nodes.Object_37.geometry}
                material={materials.logo}
              />
              <mesh
                geometry={nodes.Object_38.geometry}
                material={materials.carpet}
              />
              <mesh
                geometry={nodes.Object_39.geometry}
                material={materials["28_int_gauges"]}
              />
              <mesh
                geometry={nodes.Object_40.geometry}
                material={materials.material_19}
              />
              <mesh
                geometry={nodes.Object_41.geometry}
                material={materials.wood}
              />
              <mesh
                geometry={nodes.Object_42.geometry}
                material={materials.lamp}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/car.gltf");
