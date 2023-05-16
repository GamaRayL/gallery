import { FC, useMemo } from "react";
import Link from "next/link";
import classNames from "classnames";
import { IButton } from "shared/lib/types";

const Button: FC<IButton> = (props) => {
  const {
    children,
    onClick,
    className,
    ariaLabel,
    title,
    icon,
    iconPosition = "after",
    type = "button",
    href = "",
    isTransparent = true,
    isDisabled = false
  } = props;
  const isLink = Boolean(href);

  const bodyMarkup = useMemo(() => {
    return (
      <span className="button__body">
        {(icon && iconPosition === "before") && icon}
        {children && <span className="button__label">{children}</span>}
        {(icon && iconPosition === "after") && icon}
      </span>
    );
  }, [icon, iconPosition, children]);

  const args = {
    className: classNames(className, "button", {
      "button--only-icon": !children,
      "button--transparent": isTransparent,
    }),
    title,
    ["aria-label"]: ariaLabel,
    onClick: onClick,
  };

  return isLink
    ? <Link {...args} href={href}>{bodyMarkup}</Link>
    : <button {...args} type={type} disabled={isDisabled}>{bodyMarkup}</button>;
};

export default Button;