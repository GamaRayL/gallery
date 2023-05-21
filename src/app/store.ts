import { makeAutoObservable } from "mobx";

class Store {
  constructor () {
    makeAutoObservable(this);
  }

  isSearch = false;
  isFilter = false;
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

}

const store = new Store();

export default store;