import { ReactNode } from "react";

export interface IMeta {
  title: string;
  children: ReactNode;
  description?: string;
}

export interface ILayout extends IMeta {

}