import { makeAutoObservable } from "mobx";
import { IArtwork } from "pages_flat/Collection/lib/types";

class Store {
  constructor () {
    makeAutoObservable(this);
  }

  isSearch = false;
  isFilter = false;
  isOrbitControls = false;
  columns = 4;

  // setArtists(artists) {
  //   this.artworks = artists;
  // }

  setColumns(value: number) {
    this.columns = value;
  }

  toggleSearchOverlay() {
    this.isSearch = !this.isSearch;
  }

  toggleFilterOverlay() {
    this.isFilter = !this.isFilter;
  }

  toggleOrbitControls() {
    this.isOrbitControls = !this.isOrbitControls;
  }

  increaseColumns() {
    if (this.columns === 6) return;
    this.columns += 1;
  }

  decreaseColumns() {
    if (this.columns === 1) return;
    this.columns -= 1;
  }


  /*   getImageBySize = ({ src }: ImageLoaderProps) => {
      switch (true) {
        case (this.columns >= 4):
          return `http://localhost:5000/_next/image?url=${src}&w=384&q=100`;
        case (this.columns <= 3):
          return `http://localhost:5000/_next/image?url=${src}&w=1200&q=100`;
        default:
          return `http://localhost:5000/_next/image?url=${src}&w=1200&q=100`;
      }
    }; */
}

const store = new Store();

export default store;