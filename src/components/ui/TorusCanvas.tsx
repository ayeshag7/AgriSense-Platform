"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TorusDotCloud from "./TorusDots";

export default function TorusCanvas() {
  return (
    <div className="w-full h-full bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight />
          <TorusDotCloud />
          <OrbitControls enableZoom={false} autoRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
