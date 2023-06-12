import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { Box, Cone, Sphere } from "@react-three/drei";

const LoadingAnimation = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.04;
      meshRef.current.rotation.x += 0.04;
    }
  });

  return (
    <>
      <directionalLight
        position={[100, 100, 0]}
        castShadow
      />
      <group>
        <Sphere receiveShadow scale={[25, 25, 25]} position={[-100, 0, 0]}>
          <meshStandardMaterial color="white" />
        </Sphere>
        <Cone receiveShadow scale={[40, 40, 40]}>
          <meshStandardMaterial color="orange" />
        </Cone>
        <Box receiveShadow ref={meshRef} scale={[40, 40, 40]} position={[100, 0, 0]}>
          <meshStandardMaterial color="#363431" />
        </Box>
      </group>
    </>
  );
};

export default LoadingAnimation;