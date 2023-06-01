import { makeAutoObservable } from "mobx";
import { IArtwork, IArtworksData } from "pages_flat/Collection/lib/types";

export interface IArtworkStore {
  artworks: IArtwork[];
  searchParam: string;

  setArtworks(values: IArtwork[]): void;
  setSearchParam(value: string): void;
  get filteredArtworks(): IArtwork[];
  get totalArtworks(): number;
  hydrate(value: IArtworksData): void;
}


class ArtworkStore {
  artworks: IArtwork[] = [];
  searchParam = "";

  constructor () {
    makeAutoObservable(this);
  }


  setArtworks(artworks: IArtwork[]) {
    this.artworks = artworks;
  }

  setSearchParam = (param: string) => {
    this.searchParam = param;
  };

  get filteredArtworks() {
    return this.artworks.filter(({ name }) =>
      name.toLowerCase().includes(this.searchParam.toLowerCase())
    );
  }

  get totalArtworks() {
    return this.artworks.length;
  }

  hydrate = (data: IArtworksData) => {
    if (!data) return;
    this.setArtworks(data.artworks);
  };
}

export default ArtworkStore;
