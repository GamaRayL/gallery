import { FC } from "react";
import Header from "widgets/Header/ui/Header";
import { Modal } from "shared/ui";
import { ILayout } from "widgets/Layout/lib/types";
import Form from "shared/ui/Form/Form";
import store from "app/store";
import { observer } from "mobx-react-lite";

const Layout: FC<ILayout> = observer(({ children }) => {
  return (
    <>
      <Header />
      {store.isSearch && <Modal><Form /></Modal>}
      <main>{children}</main>
    </>
  );
});

export default Layout;