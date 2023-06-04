/* eslint-disable jsx-a11y/alt-text */
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import classNames from "classnames";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { FC, Suspense, useEffect, useRef, useState } from "react";
import store from "store/store";
import { TextureLoader } from "three";
import LoadingAnimation from "widgets/ArtworkScene/LoadingAnimation/ui/LoadingAnimation";

interface IArtObject {
  texture: object;
  scaledHeight: number;
  scaledWidth: number;
}

const ArtObject: FC<IArtObject> = ({ texture, scaledHeight, scaledWidth, }) => {
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

const ArtworkScene = observer(({ art }: { art: string; }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const container = document.querySelector('.artwork__image-conatiner') as HTMLElement;
  const [texture, setTexture] = useState<any>(null);
  let containerHeight, containerWidth, scale;
  let scaledWidth = 0;
  let scaledHeight = 0;

  useEffect(() => {
    setDomLoaded(true);

    const loader = new TextureLoader();
    loader.load(
      art,
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.error('Ошибка загрузки текстуры:', error);
      }
    );
  }, [art]);

  if (texture && texture.image) {
    const image = texture.image;
    const textureAspectRatio = image.width / image.height;

    if (container) {
      containerHeight = container.clientHeight;
      containerWidth = container.clientWidth;
    }

    if (containerHeight && containerWidth) {
      if (textureAspectRatio > containerWidth / containerHeight) {
        scale = containerWidth / image.width;
      } else {
        scale = containerHeight / image.height;
      }
    }

    if (scale) {
      scaledWidth = image.width * scale;
      scaledHeight = image.height * scale;
    }
  }

  return (<>
    {domLoaded &&
      <Suspense fallback={null}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 500] }}
          className={classNames("canvas", {
            "canvas_active": store.isOrbitControls,
          })}

        // style={{ zIndex: 2, width: "100%", height: "100%", objectFit: "contain", position: "absolute" }}
        >
          <OrbitControls enabled={store.isOrbitControls} minDistance={100} maxDistance={550} />
          {texture
            ? <ArtObject texture={texture} scaledWidth={scaledWidth} scaledHeight={scaledHeight} />
            : <LoadingAnimation />
          }
        </Canvas>
      </Suspense >
    }
  </>
  );
});

export default ArtworkScene;