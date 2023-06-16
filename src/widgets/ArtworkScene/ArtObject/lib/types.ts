import { Texture } from "three";

export interface IArtObject {
  texture: Texture;
  scaledWidth: number;
  scaledHeight: number;
}