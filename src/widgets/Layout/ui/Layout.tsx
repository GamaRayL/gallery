import { FC } from "react";
import Header from "widgets/Header/ui/Header";
import { ILayout } from "widgets/Layout/lib/types";
import { Modal } from "shared/ui";

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Modal />
      <main>{children}</main>
    </>
  );
};

export default Layout;