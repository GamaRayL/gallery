import { ReactNode, MouseEvent, ReactElement } from "react";

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