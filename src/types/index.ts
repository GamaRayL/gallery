import { IItem } from "widgets/Filter/lib/types";

export interface IArtwork {
  id: number;
  name: string;
  year: string;
  width: number;
  height: number;
  images: string[];
  artist_id: number;
  technique: string;
  artist_name: string;
}

export interface IArtist {
  id: number;
  name: string;
  gender: string;
  end_date: string;
  begin_date: string;
  artworks: IArtwork[];
}

export interface IArtworksData {
  artworks: IArtwork[];
}

export interface IArtworkTistDataSingle {
  artist: IArtist;
  artwork: IArtwork;
}

export interface IArtworkStore {
  searchParam: string;
  artworks: IArtwork[];
  artistParam: number[];
  techniqueParam: string[];

  get totalArtworks(): number;
  get uniqueArtists(): IItem[];
  get uniqueTechniques(): IItem[];
  get filteredArtworks(): IArtwork[];
  hydrate(value: IArtworksData): void;
  setSearchParam(value: string): void;
  setArtworks(values: IArtwork[]): void;
  toggleArtistParam(value: number): void;
  toggleTechniqueParam(value: string): void;
}