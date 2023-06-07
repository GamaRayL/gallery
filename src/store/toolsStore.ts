import { makeAutoObservable } from "mobx";

class Store {
  constructor () {
    makeAutoObservable(this);
  }

  isSearch = false;
  isFilter = false;
  isOrbitControls = false;
  columns = 4;


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
}

const toolsStore = new Store();

export default toolsStore;