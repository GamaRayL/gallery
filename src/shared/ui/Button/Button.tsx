import Link from "next/link";
import classNames from "classnames";
import { IButton } from "shared/lib/types";
import { CSSProperties, FC, useMemo } from "react";

const Button: FC<IButton> = (props) => {
  const {
    icon,
    title,
    justify,
    onClick,
    children,
    className,
    ariaLabel,
    href = "",
    type = "button",
    isDisabled = false,
    isTransparent = true,
    iconPosition = "after",
  } = props;

  const isLink = Boolean(href);

  const bodyMarkup = useMemo(() => {
    return (
      <span
        className="button__body"
        style={{
          "--justify": `${justify || "normal"}`
        } as CSSProperties}
      >
        {(icon && iconPosition === "before") && icon}
        {children && <span className="button__label">{children}</span>}
        {(icon && iconPosition === "after") && icon}
      </span>
    );
  }, [justify, icon, iconPosition, children]);

  const args = {
    className: classNames(className, "button", {
      "button--only-icon": !children,
      "button--transparent": isTransparent,
    }),
    title,
    onClick: onClick,
    ["aria-label"]: ariaLabel,
  };

  return isLink
    ? <Link {...args} href={href}>{bodyMarkup}</Link>
    : <button {...args} type={type} disabled={isDisabled}>{bodyMarkup}</button>;
};

export default Button;