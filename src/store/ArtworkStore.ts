import { makeAutoObservable } from "mobx";
import { IArtwork, IArtworksData } from "pages_flat/Collection/lib/types";

export interface IArtist {
  artist_name: string;
  artist_id: number;
  count: number;
}

export interface IArtworkStore {
  artworks: IArtwork[];
  searchParam: string;
  artistParam: number[];

  setArtworks(values: IArtwork[]): void;
  setSearchParam(value: string): void;
  toggleArtistParam(value: number): void;
  get filteredArtworks(): IArtwork[];
  // get filteredArtworksByArtist(): IArtwork[];
  get uniqueArtists(): any;
  get uniqueTechniques(): any;
  get totalArtworks(): number;
  hydrate(value: IArtworksData): void;
}

class ArtworkStore implements IArtworkStore {
  artworks: IArtwork[] = [];
  searchParam = "";
  artistParam: number[] = [];

  constructor () {
    makeAutoObservable(this);
  }

  setArtworks(artworks: IArtwork[]) {
    this.artworks = artworks;
  }

  toggleArtistParam = (artist_id: number) => {
    if (this.artistParam.includes(artist_id)) {
      this.artistParam = this.artistParam.filter(id => id !== artist_id);
    } else {
      this.artistParam.push(artist_id);
    }
  };

  setSearchParam = (param: string) => {
    this.searchParam = param;
  };

  get filteredArtworks() {
    if (this.artistParam && this.searchParam) {
      return this.artworks.filter(
        ({ artist_id, name }) =>
          this.artistParam.includes(artist_id) &&
          name.toLowerCase().includes(this.searchParam.toLowerCase())
      );
    } else if (this.artistParam.length) {
      return this.artworks.filter(
        ({ artist_id }) => this.artistParam.includes(artist_id)
      );
    } else if (this.searchParam) {
      return this.artworks.filter(({ name }) =>
        name.toLowerCase().includes(this.searchParam.toLowerCase())
      );
    } else {
      return this.artworks;
    }
  }

  get totalArtworks() {
    return this.artworks.length;
  }

  get uniqueArtists() {
    const artistMap = new Map<string, number>();
    for (const artwork of this.artworks) {
      const artistKey = `${artwork.artist_name}+${artwork.artist_id}`;
      if (artistMap.has(artistKey)) {
        artistMap.set(artistKey, artistMap.get(artistKey)! + 1);
      } else {
        artistMap.set(artistKey, 1);
      }
    }

    return Array.from(artistMap.entries()).map(([artistKey, count]) => {
      const [name, id] = artistKey.split('+');
      return { name, id: Number(id), count };
    });
  }

  get uniqueTechniques() {
    const techniqueMap = new Map<string, number>();
    for (const artwork of this.artworks) {
      const techniqueKey = `${artwork.technique}`;
      if (techniqueMap.has(techniqueKey)) {
        techniqueMap.set(techniqueKey, techniqueMap.get(techniqueKey)! + 1);
      } else {
        techniqueMap.set(techniqueKey, 1);
      }
    }
    return Array.from(techniqueMap.entries()).map(([name, count]) => {
      return { name, count };
    });
  }

  hydrate = (data: IArtworksData) => {
    if (!data) return;
    this.setArtworks(data.artworks);
  };
}

export default ArtworkStore;
