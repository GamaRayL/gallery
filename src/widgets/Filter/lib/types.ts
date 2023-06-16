export interface IItem {
  id: number;
  label: string;
  count: number;
}

export interface IExpandItem {
  items: IItem[];
  title: string;
  onClick?: (item: IItem) => void;
  onCheck?: (item: IItem) => boolean;
}