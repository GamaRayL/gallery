import { makeAutoObservable } from "mobx";
import { IArtwork, IArtworksData } from "pages_flat/Collection/lib/types";

class ArtworkStore {
  constructor () {
    makeAutoObservable(this);
  }

  artworks: IArtwork[] = [];
  searchParam = "";

  setSearchParam(param: string) {
    this.searchParam = param;
  }

  setArtworks(artworks: IArtwork[]) {
    this.artworks = artworks;
  }

  // fetchArtworks = async () => {
  //   return await CollectionService.getAll();
  // };

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

  // fetchAndSetArtworksOnClient = async () => {
  //   const newArtworks = await Promise.resolve([...artworks, ...clientArtworks]);
  //   console.log(newArtworks);
  //   this.setArtworks(newArtworks);
  // };

}

export default ArtworkStore;