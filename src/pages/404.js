// ? Import React
import React from "react";

// ? Import Next Hooks
import Head from "next/head";

// ? Import React Three Fiber Components
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// ? Import Car Model to render
import Car from "../3dModels/Car";

// * 404 Page
function NotFound() {
  // * Render 404 Page
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div style={{ marginTop: "15%" }} className="animate__animated animate__fadeIn">
        <div style={{ height: "100%", width: "100%" }}>
          <Canvas camera={{ fov: 35, zoom: 20, position: [25, 20, 15] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[35, 35, 0]} intensity={0.4} />
            <pointLight position={[-35, 35, 0]} intensity={0.4} />
            <React.Suspense fallback={null}>
              <Car />
            </React.Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <h2 style={{ color: "#fff", textAlign: "center" }}>
          I think you have not found what you where finding, but don&apos;t
          worry, i give a really nice car to drive wherever you want
        </h2>
      </div>
    </>
  );
}

export default NotFound;
