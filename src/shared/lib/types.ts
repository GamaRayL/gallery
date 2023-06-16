import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction
} from "react";
import { ImageLoaderProps } from "next/image";

type ButtonClickEvent = MouseEvent<HTMLButtonElement | HTMLAnchorElement>;

export interface IButton {
  href?: string;
  title?: string;
  justify?: string;
  ariaLabel?: string;
  className?: string;
  isDisabled?: boolean;
  icon?: ReactElement;
  children?: ReactNode;
  isTransparent?: boolean;
  iconPosition?: "before" | "after";
  type?: "button" | "submit" | "reset";
  onClick?: (event: ButtonClickEvent) => void;
}

export interface ICustomLink {
  label: string;
  pathname: string;
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
  setValue?: Dispatch<SetStateAction<string>>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IInputRange {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IGrid {
  columns?: number;
  className?: string;
  children?: ReactNode;
}

export interface IContainer {
  className?: string;
  children?: ReactNode;
}

export interface ICheckbox {
  count?: number;
  label?: string;
  checked?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLLabelElement> | undefined;
}

export interface ICard {
  src: string;
  name: string;
  year: string;
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  loader?: ((src: ImageLoaderProps) => string);
  setCardInfo?: Dispatch<SetStateAction<{ name: string, year: string; } | undefined>>;
}

export interface IPopup {
  top?: boolean;
  color?: string;
  bgColor?: string;
  className?: string;
  children?: ReactNode;
}

export interface IPlaceholder {
  className?: string;
  sizePercent?: string;
}