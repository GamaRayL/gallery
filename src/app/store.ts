import { makeAutoObservable } from "mobx";

class Store {
  constructor () {
    makeAutoObservable(this);
  }

  isSearch = false;

  
}

const store = new Store();

export default store;