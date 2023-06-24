import classNames from "classnames";
import { TextureLoader } from "three";
import toolsStore from "store/ToolsStore";
import { observer } from "mobx-react-lite";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FC, Suspense, useEffect, useState } from "react";
import { ArtObject } from "widgets/ArtworkScene/ArtObject";
import { IArtworkScene } from "widgets/ArtworkScene/lib/types";

const ArtworkScene: FC<IArtworkScene> = observer(({ art }) => {
  const container = document.querySelector('.artwork__image-conatiner') as HTMLElement;
  const [domLoaded, setDomLoaded] = useState(false);
  const { texture } = toolsStore;

  let containerHeight, containerWidth, scale;
  let scaledWidth = 0;
  let scaledHeight = 0;

  useEffect(() => {
    setDomLoaded(true);

    const loader = new TextureLoader();
    loader.loadAsync(
      `https://gallery-omarov.vercel.app/_next/image?url=${art}&w=3840&q=75`,
    )
      .then(res => toolsStore.setTexture(res))
      .catch(err => console.log(`Ошибка загрузки в textLoader: ${err}`));
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
            minDistance={100}
            maxDistance={550}
            enabled={toolsStore.isOrbitControls}
          />
          {texture
            && <ArtObject
              texture={texture}
              scaledWidth={scaledWidth}
              scaledHeight={scaledHeight}
            />
          }
        </Canvas>
      </Suspense >
    }
  </>
  );
});

export default ArtworkScene;