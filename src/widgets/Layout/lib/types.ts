import { Router } from "next/router";
import { ReactNode } from "react";

export interface IMeta {
  title: string;
  description?: string;
  children: ReactNode;
}

export interface ILayout extends IMeta {

}