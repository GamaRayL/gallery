declare interface IStore {
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

declare const ToolsStore: IStore;

export default ToolsStore;