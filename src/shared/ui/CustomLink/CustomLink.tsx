import { FC } from "react";
import Link from "next/link";
import { ICustomLink } from "shared/lib/types";

const CustomLink: FC<ICustomLink> = (props) => {
  const { pathname, label } = props;

  return (
    <Link
      className="link"
      href={pathname}
    >
      <span className="link__label">{label}</span>
    </Link>
  );
};

export default CustomLink;