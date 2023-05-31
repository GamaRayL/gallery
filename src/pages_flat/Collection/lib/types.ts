export interface IArtwork {
  id: number;
  name: string;
  technique: string;
  width: number;
  height: number;
  year: string;
  artist_id: number;
  images: string[];
}

export interface IArtworksData {
  artworks: IArtwork[];
}

// {
//   "id": 36,
//   "name": "Лезгинка",
//   "technique": "картон/масло",
//   "width": 32.5,
//   "height": 55.6,
//   "year": "1990",
//   "artist_id": 2,
//   "images": [
//     "apigalleryomarov.ru/images/Августович Алексей Иванович/original/Лезгинка.webp",
//     "apigalleryomarov.ru/images/Августович Алексей Иванович/300/Лезгинка.webp",
//     "apigalleryomarov.ru/images/Августович Алексей Иванович/1200/Лезгинка.webp"
//   ]