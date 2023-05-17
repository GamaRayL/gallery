import { FC } from "react";
import { Menu } from "features/Menu";

const Header: FC = () => {

  return (
    <header className="header">
      <Menu />
    </header>
  );
};

export default Header;