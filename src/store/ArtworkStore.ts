import { makeAutoObservable } from "mobx";
import { IArtwork, IArtworksData } from "pages_flat/Collection/lib/types";

class ArtworkStore {
  artworks: IArtwork[] = [];
  searchParam = "";

  constructor () {
    makeAutoObservable(this);
  }

  setArtworks(artworks: IArtwork[]) {
    this.artworks = artworks;
  }

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

  setSearchParam = (param: string) => {
    this.searchParam = param;
  };
}

export default ArtworkStore;
