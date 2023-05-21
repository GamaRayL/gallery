import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Button, Card, Container } from "shared/ui";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { observer } from "mobx-react-lite";
import store from "app/store";

const Home = observer(() => {
  const { pathname } = useRouter();
  const { scrollXProgress } = useScroll();
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const home = document.querySelector(".home") as HTMLDivElement;
    const body = document.querySelector("body") as HTMLBodyElement;
    const header = document.querySelector(".header") as HTMLElement;

    if (pathname === "/") {
      body.style.overflowX = "auto";
      body.style.overflowY = "hidden";

      body.style.background = "#FFCE01";
      header.style.position = "fixed";

      home.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
          window.scrollBy(body.offsetWidth / 4, 0);
        }
        else if (event.deltaY < 0) {
          window.scrollBy(-body.offsetWidth / 4, 0);
        }
      });
    }
  }, [pathname]);

  return (
    <Container>
      <section className="home" >
        <AnimatePresence>
          {!store.isSearch &&
            <motion.div
              className="home__info"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{
                type: "tween",
                duration: .5,
              }}
            >
              <h1 className="home__title">
                Откройте <br /> для себя <br /> галерею картин
              </h1>
              <p className="home__paragraph">
                Добро пожаловать в частную галерею <br /> Омара Омарова!</p>
              <Button
                className="home__button"
                href="/collection"
                iconPosition="before"
                icon={<BiRightArrowAlt size={28} className="home__icon" />}
              >
                В коллекцию
              </Button>
            </motion.div >
          }
        </AnimatePresence>
        <AnimatePresence>
          {!store.isSearch &&
            <motion.div
              style={{
                display: "flex",
                gap: 60,
                alignItems: "center",
                paddingRight: "220px"
              }}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "tween",
                duration: .5,
              }}
              className="card-container"
            >
              <Card />
              <Card />
              <Card />
            </motion.div>
          }
        </AnimatePresence>
        <motion.div className="progress-bar" style={{ scaleX }} />
      </section >
    </Container>
  );
});

export default Home;