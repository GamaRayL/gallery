import { makeAutoObservable } from "mobx";

class Store {
  constructor () {
    makeAutoObservable(this);
  }

  isSearch = false;
  columns = 4;

  toggleOverlay() {
    this.isSearch = !this.isSearch;
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