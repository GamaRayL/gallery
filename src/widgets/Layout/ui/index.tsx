import { FC } from "react";
import Header from "widgets/Header/ui";
import { Layout } from "widgets/Layout/lib/types";

const Layout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;