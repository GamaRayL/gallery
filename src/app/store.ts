import { makeAutoObservable } from "mobx";
import { ImageLoaderProps } from "next/image";

class Store {
  constructor () {
    makeAutoObservable(this);
  }

  isSearch = false;
  isFilter = false;
  isOrbitControls = false;
  columns = 4;

  toggleSearchOverlay() {
    this.isSearch = !this.isSearch;
  }

  toggleFilterOverlay() {
    this.isFilter = !this.isFilter;
  }

  setColumns(value: number) {
    this.columns = value;
  }

  increaseColumns() {
    if (this.columns === 6) return;
    this.columns += 1;
  }

  decreaseColumns() {
    if (this.columns === 1) return;
    this.columns -= 1;
  }

  toggleOrbitControls() {
    this.isOrbitControls = !this.isOrbitControls;
  }

  getImageBySize = ({ src }: ImageLoaderProps) => {
    switch (true) {
      case (this.columns >= 5):
        return `http://localhost:5000/_next/image?url=${src}&w=384&q=75`;
      case (this.columns >= 3):
        return `http://localhost:5000/_next/image?url=${src}&w=640&q=75`;
      case (this.columns == 2):
        return `http://localhost:5000/_next/image?url=${src}&w=1080&q=75`;
      case (this.columns == 1):
        return `http://localhost:5000/_next/image?url=${src}&w=1920&q=75`;
      default:
        return `http://localhost:5000/_next/image?url=${src}&w=3840&q=75`;
    }
  };
}

const store = new Store();

export default store;