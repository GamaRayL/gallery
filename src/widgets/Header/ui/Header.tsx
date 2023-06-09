import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Button, Container } from "shared/ui";
import { Menu } from "widgets/Header/Menu";
import { useRouter } from "next/router";

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
      // style={{
      //   position: pathname == "/" ? "fixed" : "static"
      // }}
      >
        <Menu />
        <Button
          className={classNames("header__logo", {
            "header__logo_home": pathname == "/"
          })}
          icon={
            <Image
              src="/logo.svg"
              width={60}
              height={60}
              priority
              alt="Лого"
            />
          }
          href="/"
        />
      </header >
    </Container >
  );
};

export default Header;