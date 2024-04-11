/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Scene";
import Bird from "../models/Bird";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -10, -50];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.25, 0.25, 0.25];
    } else {
      screenScale = [0.5, 0.5, 0.5];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForSceneSize = () => {
    let screenScale = null;
    let screenPosition;
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };
  const adjustBirdForSceneSize = () => {
    let screenScale = null;
    let screenPosition;
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, 4, -4];
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForSceneSize();
  const [birdScale, birdPosition] = adjustBirdForSceneSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 100 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 10]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
          <Bird
            scale={birdScale}
            position={birdPosition}
            rotation={[0, 20, 0]}
          />
          <Sky />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
export default Home;
