import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/bird.glb";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Bird = (props) => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);
  // console.log(birdRef);
  useEffect(() => {
    // Object.keys(actions).forEach((actionName) => {
    //   console.log(actionName); // Logs the name of each action
    //   // You can also explore the action object itself
    //   console.log(actions[actionName]);
    // });

    // actions["Idle/fly/land"].play();
    // actions["Roar/Angry"].play();
    actions["Take 001"].play();
  }, []);
  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    // // Check if the bird reached a certain endpoint relative to the camera

    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Bird;
