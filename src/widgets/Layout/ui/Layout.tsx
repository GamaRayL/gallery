import { useRouter } from "next/router";
import toolsStore from "store/ToolsStore";
import { Meta } from "widgets/Layout/Meta";
import { observer } from "mobx-react-lite";
import Header from "widgets/Header/ui/Header";
import { FC, useEffect, useState } from "react";
import { ILayout } from "widgets/Layout/lib/types";
import { RiArrowUpCircleLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { layoutBtnVariants, layoutVariants } from "widgets/Layout/lib/utils";
import { Button, Container, Form, Modal } from "shared/ui";

const Layout: FC<ILayout> = observer((props) => {
  const [scroll, setScroll] = useState(0);
  const { children, title, description } = props;

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
      {toolsStore.isSearch &&
        <Modal>
          <Container>
            <Form />
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