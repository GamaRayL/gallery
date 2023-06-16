import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import { ICustomLink } from "shared/lib/types";

const CustomLink: FC<ICustomLink> = (props) => {
  const { pathname, label, className, disabled, onClick } = props;

  return (
    <Link
      href={pathname}
      onClick={onClick}
      className={classNames("link", {
        "link_disable": disabled
      })}
    >
      <span className={classNames("link__label", className)}>{label}</span>
    </Link>
  );
};

export default CustomLink;