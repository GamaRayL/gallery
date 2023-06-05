import { FC, useEffect, useState } from "react";
import { PictureFilled } from "@ant-design/icons";
import { Button, Container } from "shared/ui";
import { useRouter } from "next/router";
import { Menu } from "widgets/Header/Menu";

const Header: FC = () => {
  return (
    <Container>
      <header className="header">
        <Menu />
        <Button
          className="header__logo"
          icon={<PictureFilled style={{ fontSize: 60 }} />}
          href="/"
        />
      </header >
    </Container >
  );
};

export default Header;