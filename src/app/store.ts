import { makeAutoObservable } from "mobx";

class Store {
  constructor () {
    makeAutoObservable(this);
  }

  isSearch = false;
  counter = 0;

  increase() {
    this.counter += 1;
  }

  toggleOverlay() {
    this.isSearch = !this.isSearch;
  }
}

const store = new Store();

export default store;