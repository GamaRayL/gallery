/* eslint-disable jsx-a11y/alt-text */
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import store from "app/store";
import { observer } from "mobx-react-lite";
import { array } from "pages_flat/Collection/lib/utils";
import { Suspense, useEffect, useState } from "react";
import { TextureLoader } from "three";

const ArtObject = () => {
  const texture = useLoader(TextureLoader, array[8].image);
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
    <mesh scale={[scaledWidth, scaledHeight, 0.05]}>
      <planeGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const ArtworkScene = observer(() => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (<>
    {domLoaded &&
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 500] }}
          style={{ zIndex: 2, width: "100%", height: "100%", objectFit: "contain", position: "absolute" }}
        >
          {store.isOrbitControls &&
            <OrbitControls enableRotate={false} minDistance={100} />}
          <ArtObject />
        </Canvas>
      </Suspense >
    }
  </>
  );
});

export default ArtworkScene;