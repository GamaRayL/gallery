/* eslint-disable jsx-a11y/alt-text */
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import store from "store/store";
import { TextureLoader } from "three";

const ArtObject = ({ art }: { art: string; }) => {
  const texture = useLoader(TextureLoader, art);
  const { image } = texture;
  const textureAspectRatio = image.width / image.height;
  const container = document.querySelector(".artwork__image-conatiner") as HTMLElement;

  let containerHeight, containerWidth, scale;
  let scaledWidth = 0;
  let scaledHeight = 0;

  if (container) {
    containerHeight = container.clientHeight;
    containerWidth = container.clientWidth;
  }

  if (containerHeight && containerWidth)
    if (textureAspectRatio > containerWidth / containerHeight) {
      scale = containerWidth / image.width;
    } else {
      scale = containerHeight / image.height;
    }

  if (scale) {
    scaledWidth = image.width * scale;
    scaledHeight = image.height * scale;
  }

  return (
    <group>
      <group scale={[scaledWidth, scaledHeight, 1]}>
        <mesh scale={[1, 1, 10]}>
          <boxGeometry args={[1, 1]} />
          <meshBasicMaterial color="black" />
        </mesh>
        <mesh position={[0, 0, 6]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
};

const ArtworkScene = ({ art }: { art: string; }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (<>
    {domLoaded &&
      <Suspense fallback={null}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 500] }}
        // style={{ zIndex: 2, width: "100%", height: "100%", objectFit: "contain", position: "absolute" }}
        >
          {store.isOrbitControls &&
            <OrbitControls minDistance={100} maxDistance={550} />}
          <ArtObject art={art} />
        </Canvas>
      </Suspense >
    }
  </>
  );
};

export default ArtworkScene;