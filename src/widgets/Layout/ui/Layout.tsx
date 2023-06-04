import { FC } from "react";
import { observer } from "mobx-react-lite";
import { motion, AnimatePresence } from "framer-motion";
import store from "store/toolsStore";
import Header from "widgets/Header/ui/Header";
import { ILayout } from "widgets/Layout/lib/types";
import { layoutVariants } from "widgets/Layout/lib/utils";
import { Meta } from "widgets/Layout/Meta";
import { Container, Form, Modal } from "shared/ui";

const Layout: FC<ILayout> = observer((props) => {
  const { children, title, description } = props;

  return (
    <Meta title={title} description={description}>
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
            style={{ marginRight: "calc(-1*(100vw - 100%))" }}
            variants={layoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Header />
          </motion.div>
        }
      </AnimatePresence>

      <main>{children}</main>
    </Meta>
  );
});

export default Layout;