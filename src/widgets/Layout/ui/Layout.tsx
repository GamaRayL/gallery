import { FC } from "react";
import Header from "widgets/Header/ui/Header";
import { ILayout } from "widgets/Layout/lib/types";

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;