// export interface IFilter {
//   className?: string;
// }

interface IItem {
  id?: number;
  name: string;
  count: number;
}

export interface IExpandItem {
  items: IItem[];
  title: string;
  onChecked?: any;
  onClick?: any;
}