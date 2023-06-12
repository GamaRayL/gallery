import { makeAutoObservable } from "mobx";

class ToolsStore {
  isSearch = false;
  isFilter = false;
  isOrbitControls = false;
  texture = null as THREE.Texture | null;
  columns = 4;

  constructor () {
    makeAutoObservable(this);
  }

  setColumns(value: number) {
    this.columns = value;
  }

  setTexture(value: THREE.Texture | null) {
    this.texture = value;
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

const toolsStore = new ToolsStore();

export default toolsStore;