import { FC, Suspense, useEffect, useState } from "react";
import { TextureLoader } from "three";
import { observer } from "mobx-react-lite";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import classNames from "classnames";
import toolsStore from "store/ToolsStore";
import { ArtObject } from "widgets/ArtworkScene/ArtObject";
import { LoadingAnimation } from "widgets/ArtworkScene/LoadingAnimation";
import { IArtworkScene } from "widgets/ArtworkScene/lib/types";

const ArtworkScene: FC<IArtworkScene> = observer(({ art }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const container = document.querySelector('.artwork__image-conatiner') as HTMLElement;
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
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
            "canvas_active": toolsStore.isOrbitControls,
          })}
        >
          <OrbitControls
            enabled={toolsStore.isOrbitControls}
            minDistance={100}
            maxDistance={550}
          />
          {texture
            ? <ArtObject
              texture={texture}
              scaledWidth={scaledWidth}
              scaledHeight={scaledHeight}
            />
            : <LoadingAnimation />
          }
        </Canvas>
      </Suspense >
    }
  </>
  );
});

export default ArtworkScene;