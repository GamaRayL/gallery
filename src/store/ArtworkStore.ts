import { makeAutoObservable } from "mobx";
import { IArtwork, IArtworkStore, IArtworksData } from "types";
import { IItem } from "widgets/Filter/lib/types";

function generateRandomNumber(length: number) {
  let result = 1;
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 1000);
  }
  return result;
}

class ArtworkStore implements IArtworkStore {
  searchParam = "";
  artworks: IArtwork[] = [];
  artistParam: number[] = [];
  artSliced: IArtwork[] = [];
  techniqueParam: string[] = [];


  constructor () {
    makeAutoObservable(this);
  }

  setArtworks(artworks: IArtwork[]) {
    this.artworks = artworks;
  }

  setSearchParam = (param: string) => {
    this.searchParam = param;
  };

  toggleArtistParam = (artist_id: number) => {
    if (this.artistParam.includes(artist_id)) {
      this.artistParam = this.artistParam.filter((id) => id !== artist_id);
    } else {
      this.artistParam.push(artist_id);
    }
  };

  toggleTechniqueParam = (name: string) => {
    if (this.techniqueParam.includes(name)) {
      this.techniqueParam = this.techniqueParam.filter((tech_name) => tech_name !== name);
    } else {
      this.techniqueParam.push(name);
    }
  };

  get randomArtworks() {
    return this.artworks.splice(0, 4);
  }

  get filteredArtworks() {
    if (!this.artworks) return [];
    return this.artworks.filter((artwork) => {
      const techniqueMarch =
        this.techniqueParam.length === 0 ||
        this.techniqueParam.includes(artwork.technique);
      const artistMatch =
        this.artistParam.length === 0 ||
        this.artistParam.includes(artwork.artist_id);
      const searchMatch =
        this.searchParam === "" ||
        artwork.name.toLowerCase().includes(this.searchParam.toLowerCase());
      return artistMatch && techniqueMarch && searchMatch;
    });
  }

  get uniqueArtists() {
    if (!this.artworks) return [];
    const artistMap = new Map<string, IItem>();
    for (const artwork of this.artworks) {
      const artistKey = `${artwork.artist_name}+${artwork.artist_id}`;
      const existingArtist = artistMap.get(artistKey);
      if (existingArtist) {
        existingArtist.count++;
      } else {
        artistMap.set(artistKey, {
          label: artwork.artist_name,
          id: artwork.artist_id,
          count: 1,
        });
      }
    }

    return Array.from(artistMap.values());
  }

  get uniqueTechniques() {
    if (!this.artworks) return [];
    const techniqueMap = new Map<string, IItem>();
    for (const artwork of this.artworks) {
      const techniqueKey = artwork.technique;
      const existingTechnique = techniqueMap.get(techniqueKey);
      if (existingTechnique) {
        existingTechnique.count++;
      } else {
        techniqueMap.set(techniqueKey, {
          label: artwork.technique,
          id: generateRandomNumber(1),
          count: 1,
        });
      }
    }
    return Array.from(techniqueMap.values());
  }

  get totalArtworks() {
    return this.artworks.length;
  }

  hydrate = (data: IArtworksData) => {
    if (!data) return;
    this.setArtworks(data.artworks);
  };

  // get uniqueYears() {
  //   const yearMap = new Map<string, IItem>();
  //   for (const artwork of this.artworks) {
  //     const yearKey = artwork.year;
  //     const existingYear = yearMap.get(yearKey);
  //     if (existingYear) {
  //       existingYear.count++;
  //     } else {
  //       yearMap.set(yearKey, {
  //         label: artwork.year,
  //         id: generateRandomNumber(1),
  //         count: 1,
  //       });
  //     }
  //   }
  //   return Array.from(yearMap.values());
  // }
}

export default ArtworkStore;
