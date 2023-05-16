import { FC } from "react";
import Header from "widgets/Header/ui/Header";
import { Modal } from "shared/ui";
import { ILayout } from "widgets/Layout/lib/types";

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