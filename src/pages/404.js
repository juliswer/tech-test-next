import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Car from "../3dModels/Car";
import { OrbitControls } from "@react-three/drei";

function NotFound() {
  return (
    <>
      <h2>h</h2>
      <div style={{height: "100%", width: "100%"}}>
        <Canvas camera={{ fov: 35, zoom: 20, position: [25, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />
          <Suspense fallback={null}>
            <Car />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default NotFound;
