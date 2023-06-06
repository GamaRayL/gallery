import { FC } from "react";
import Image from "next/image";
import { Button, Container } from "shared/ui";
import { Menu } from "widgets/Header/Menu";

const Header: FC = () => {
  return (
    <Container>
      <header className="header">
        <Menu />
        <Button
          className="header__logo"
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