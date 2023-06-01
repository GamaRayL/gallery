export interface IArtwork {
  id: number;
  name: string;
  technique: string;
  width: number;
  height: number;
  year: string;
  artist_id: number;
  artist_name: string;
  images: string[];
}

export interface IArtworksData {
  artworks: IArtwork[];
}

// export interface IArtist {
//   id: number;
//   name: string;
//   gender: string;
//   begin_date: string;
//   end_date: string;
//   artworks: IArtwork[];
// }

// {
//   "id": 1,
//   "name": "Конопацкая Галина Павловна",
//   "gender": "female",
//   "begin_date": "1911",
//   "end_date": "1988",
//   "artworks": [
//     {
//       "id": 130,
//       "name": "В лесу",
//       "technique": "холст/масло",
//       "year": "2004",
//       "width": 25.0,
//       "height": 16.0,
//       "artist_id": 1,
//       "images": [
//         "http://api-omarov.ru/images/Конопацкая_Галина_Павловна/original/В_лесу.webp",
//         "http://api-omarov.ru/images/Конопацкая_Галина_Павловна/300/В_лесу.webp",
//         "http://api-omarov.ru/images/Конопацкая_Галина_Павловна/1200/В_лесу.webp"
//       ]
//     }