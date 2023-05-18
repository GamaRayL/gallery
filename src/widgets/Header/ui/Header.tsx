import { FC, useEffect, useState } from "react";
import { Menu } from "features";
import { PictureFilled } from "@ant-design/icons";

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
        <PictureFilled
          style={{
            fontSize: "60px",
            position: "absolute",
            right: "60px",
            top: "20px",
          }} />
      </header>
      <div className="header__helper" style={{ height: `${height || 100}px` }}></div>
    </>
  );
};

export default Header;