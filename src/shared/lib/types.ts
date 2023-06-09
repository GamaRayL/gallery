import { ImageLoaderProps } from "next/image";
import { ChangeEvent, Dispatch, MouseEvent, MouseEventHandler, ReactElement, ReactNode, RefObject, SetStateAction } from "react";

type ButtonClickEvent = MouseEvent<HTMLButtonElement | HTMLAnchorElement>;

export interface IButton {
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  href?: string;
  title?: string;
  justify?: string;
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
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface IModal {
  color?: string;
  children?: ReactNode;
}

export interface IInput {
  size?: number;
  value: string;
  placeholder?: string;
  inputRef?: RefObject<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setValue?: Dispatch<SetStateAction<string>>;
}

export interface IInputRange {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IGrid {
  children?: ReactNode;
  className?: string;
  columns?: number;
}

export interface IContainer {
  children?: ReactNode;
  className?: string;
}

export interface ICheckbox {
  label?: string;
  count?: number;
  className?: string;
  checked?: boolean;
  onClick?: MouseEventHandler<HTMLLabelElement> | undefined;
}

export interface ICard {
  children?: ReactNode;
  className?: string;
  src: string;
  name: string;
  year: string;
  setCardInfo?: Dispatch<SetStateAction<{ name: string, year: string; } | undefined>>;
  loader?: ((src: ImageLoaderProps) => string);
  onClick?: (event: MouseEvent) => void;
}

export interface IPopup {
  children?: ReactNode;
  top?: boolean;
  color?: string;
  bgColor?: string;
  className?: string;
}