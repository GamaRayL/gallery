import { FC } from "react";
import { IArtObject } from "../lib/types";

const ArtObject: FC<IArtObject> = (props) => {
  const { texture, scaledHeight, scaledWidth } = props;

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

export default ArtObject;