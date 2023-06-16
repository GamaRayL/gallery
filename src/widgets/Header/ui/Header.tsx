import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Menu } from "widgets/Header/Menu";
import { Button, Container } from "shared/ui";

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <Container className={classNames({
      "header-container": pathname == "/"
    })}>

      <header
        className={classNames("header", {
          "header_home": pathname == "/"
        })}
      >
        <Menu />
        <Button
          href="/"
          icon={
            <Image
              priority
              alt="Лого"
              width={60}
              height={60}
              src="/images/logo.svg"
            />
          }
          className={classNames("header__logo", {
            "header__logo_home": pathname == "/"
          })}
        />
      </header >
    </Container >
  );
};

export default Header;