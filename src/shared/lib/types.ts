import { ChangeEvent, Dispatch, MouseEvent, ReactElement, ReactNode, SetStateAction } from "react";

type ButtonClickEvent = MouseEvent<HTMLButtonElement | HTMLAnchorElement>;

export interface IButton {
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  href?: string;
  title?: string;
  ariaLabel?: string;
  isDisabled?: boolean;
  icon?: ReactElement;
  iconPosition?: "before" | "after";
  isTransparent?: boolean;
  onClick?: (event: ButtonClickEvent) => void;
}

export interface ICustomLink {
  pathname: string;
  label: string;
}

export interface IModal {
  color?: string;
  children?: ReactNode;
}

export interface IInput {
  size?: number;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setValue?: Dispatch<SetStateAction<string>>;
}