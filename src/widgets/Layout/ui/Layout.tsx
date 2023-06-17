import toolsStore from "store/ToolsStore";
import { Meta } from "widgets/Layout/Meta";
import { observer } from "mobx-react-lite";
import Header from "widgets/Header/ui/Header";
import { FC, useEffect, useState } from "react";
import { ILayout } from "widgets/Layout/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container, Form, Modal } from "shared/ui";
import { RiArrowUpCircleLine, RiFileMarkFill } from "react-icons/ri";
import { layoutBtnVariants, layoutVariants, notificationVariants } from "widgets/Layout/lib/utils";

const Layout: FC<ILayout> = observer((props) => {
  const [scroll, setScroll] = useState(0);
  const { children, title, description } = props;

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <Meta title={title} description={description}>
      {toolsStore.isSearch &&
        <Modal>
          <Container>
            <Form />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={notificationVariants}
              className="layout__notification">

              <RiFileMarkFill size={24} />
              <span>! - Поиск по содержимому сайта планируется в будущем</span>

            </motion.div>
          </Container>
        </Modal>
      }

      <AnimatePresence>
        {!toolsStore.isSearch &&
          <motion.div
            initial="hidden"
            animate="visible"
            variants={layoutVariants}
          >
            <Header />
          </motion.div>
        }
      </AnimatePresence>

      <AnimatePresence>
        {scroll > 600 &&
          <motion.div
            exit="hidden"
            initial="hidden"
            animate="visible"
            variants={layoutBtnVariants}
          >
            <Button
              onClick={scrollToTop}
              className="layout__btn"
              icon={<RiArrowUpCircleLine size={60} />}
            />
          </motion.div>
        }
      </AnimatePresence>

      <main>
        {children}
      </main>
    </Meta>
  );
});

export default Layout;