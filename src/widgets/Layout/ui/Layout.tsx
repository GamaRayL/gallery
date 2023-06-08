import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { motion, AnimatePresence } from "framer-motion";
import toolsStore from "store/ToolsStore";
import Header from "widgets/Header/ui/Header";
import { ILayout } from "widgets/Layout/lib/types";
import { layoutVariants } from "widgets/Layout/lib/utils";
import { Meta } from "widgets/Layout/Meta";
import { Button, Container, Form, Modal } from "shared/ui";
import { RiArrowUpCircleLine } from "react-icons/ri";

const Layout: FC<ILayout> = observer((props) => {
  const { children, title, description } = props;
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Meta title={title} description={description}>
      <AnimatePresence>
        {toolsStore.isSearch &&
          <motion.div
            variants={layoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
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
        {!toolsStore.isSearch &&
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

      {
        scroll > 600 &&
        <Button
          className="layout__btn"
          icon={<RiArrowUpCircleLine size={60} />}
          onClick={scrollToTop}
        />
      }

      <main>{children}</main>
    </Meta>
  );
});

export default Layout;