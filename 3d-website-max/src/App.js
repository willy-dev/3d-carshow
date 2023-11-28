import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
