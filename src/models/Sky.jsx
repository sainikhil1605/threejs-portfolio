import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/sky.glb";
const Sky = () => {
  const sky = useGLTF(skyScene);
  return (
    <mesh scale={[3, 3, 3]} position={[-5, -5, -5]}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
export default Sky;
