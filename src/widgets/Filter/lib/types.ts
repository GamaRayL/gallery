// export interface IFilter {
//   className?: string;
// }

export interface IItem {
  id: number;
  label: string;
  count: number;
}

export interface IExpandItem {
  items: IItem[];
  title: string;
  onCheck?: (item: IItem) => boolean;
  onClick?: (item: IItem) => void;
}