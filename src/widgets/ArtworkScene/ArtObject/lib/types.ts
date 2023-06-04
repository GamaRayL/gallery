import { Texture } from "three";

export interface IArtObject {
  texture: Texture;
  scaledHeight: number;
  scaledWidth: number;
}