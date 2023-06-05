import { FC } from "react";
import Link from "next/link";
import { ICustomLink } from "shared/lib/types";
import classNames from "classnames";

const CustomLink: FC<ICustomLink> = (props) => {
  const { pathname, label, className, disabled, onClick } = props;

  return (
    <Link
      className={classNames("link", {
        "link_disable": disabled
      })}
      href={pathname}
      onClick={onClick}
    >
      <span className={classNames("link__label", className)}>{label}</span>
    </Link>
  );
};

export default CustomLink;