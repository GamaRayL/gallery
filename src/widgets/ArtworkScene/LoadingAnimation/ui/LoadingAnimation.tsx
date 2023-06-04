import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const LoadingAnimation = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[200, 200, 200]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="gray" />
    </mesh>
  );
};

export default LoadingAnimation;