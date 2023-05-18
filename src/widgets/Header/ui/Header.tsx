import { FC, useEffect, useState } from "react";
import { Menu } from "features";
import { PictureFilled } from "@ant-design/icons";
import { Button } from "shared/ui";

const Header: FC = () => {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const header = document.querySelector(".header") as HTMLElement;
    if (header.clientHeight)
      setHeight(header.clientHeight);
  }, []);

  return (
    <>
      <header className="header">
        <Menu />
        <Button
          className="header__logo"
          icon={<PictureFilled style={{ fontSize: 60 }} />}
          href="/"
        />
      </header>
      <div className="header__helper" style={{ height: `${height || 100}px` }}></div>
    </>
  );
};

export default Header;