import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Car from "../3dModels/Car";
import { OrbitControls } from "@react-three/drei";

function NotFound() {
  return (
    <>
      <div style={{marginTop: "40px"}}>
        <div style={{ height: "100%", width: "100%" }}>
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
        <h2 style={{color: "#fff"}}>
          I think you have not found what you where finding, but don&apos;t
          worry, i give a really nice car to drive wherever you want
        </h2>
      </div>
    </>
  );
}

export default NotFound;
