import { FC } from "react";
import Header from "widgets/Header/ui/Header";
import { Modal } from "shared/ui";
import { ILayout } from "widgets/Layout/lib/types";
import Form from "shared/ui/Form/Form";
import store from "app/store";
import { observer } from "mobx-react-lite";
import { motion, AnimatePresence } from "framer-motion";

const Layout: FC<ILayout> = observer(({ children }) => {
  return (
    <>
      <AnimatePresence>
        {!store.isSearch &&
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{
              type: "tween",
              duration: .5,
            }}
          >
            <Header />
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        {store.isSearch &&
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{
              type: "tween",
              duration: .2
            }}
          >
            <Modal>
              <Form />
            </Modal>
          </motion.div>
        }
      </AnimatePresence>
      <main>{children}</main>
    </>
  );
});

export default Layout;