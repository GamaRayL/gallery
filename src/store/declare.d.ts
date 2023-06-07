declare interface IToolsStore {
  isSearch: boolean;
  isFilter: boolean;
  isOrbitControls: boolean;
  columns: number;
  setColumns(value: number): void;
  toggleSearchOverlay(): void;
  toggleFilterOverlay(): void;
  toggleOrbitControls(): void;
  increaseColumns(): void;
  decreaseColumns(): void;
}

declare const toolsStore: IToolsStore;

export default toolsStore;