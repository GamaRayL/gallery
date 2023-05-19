import { FC } from "react";
import Header from "widgets/Header/ui/Header";
import { Container, Modal } from "shared/ui";
import { ILayout } from "widgets/Layout/lib/types";
import Form from "shared/ui/Form/Form";
import store from "app/store";
import { observer } from "mobx-react-lite";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    y: -300,
    opacity: 0,
    transition: {
      duration: .5,
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
    }
  },
  exit: {
    x: 300,
    opacity: 0,
  }
};

const Layout: FC<ILayout> = observer(({ children }) => {
  return (
    <>
      <AnimatePresence>
        {store.isSearch &&
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{
              type: "tween",
            }}
          >
            <Modal>
              <Container>
                <Form />
              </Container>
            </Modal>
          </motion.div>
        }
      </AnimatePresence>

      <AnimatePresence>
        {!store.isSearch &&
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Header />
          </motion.div>
        }
      </AnimatePresence>

      <main>{children}</main>
    </>
  );
});

export default Layout;