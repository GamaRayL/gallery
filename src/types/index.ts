import { IItem } from "widgets/Filter/lib/types";

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

export interface IArtist {
  id: number;
  name: string;
  gender: string;
  begin_date: string;
  end_date: string;
  artworks: IArtwork[];
}

export interface IArtworksData {
  artworks: IArtwork[];
}

export interface IArtworkTistDataSingle {
  artwork: IArtwork;
  artist: IArtist;
}

export interface IArtworkStore {
  searchParam: string;
  artworks: IArtwork[];
  artistParam: number[];
  techniqueParam: string[];

  setSearchParam(value: string): void;
  setArtworks(values: IArtwork[]): void;
  toggleArtistParam(value: number): void;
  toggleTechniqueParam(value: string): void;
  get totalArtworks(): number;
  get uniqueArtists(): IItem[];
  get uniqueTechniques(): IItem[];
  get filteredArtworks(): IArtwork[];
  hydrate(value: IArtworksData): void;
}