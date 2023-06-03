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

export interface IArtworkDataSingle {
  artwork: IArtwork;
}

export interface IArtist {
  id: number;
  name: string;
  gender: string;
  begin_date: string;
  end_date: string;
  artworks: IArtwork[];
}
