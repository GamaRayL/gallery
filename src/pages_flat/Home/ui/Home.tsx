import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import toolsStore from "store/ToolsStore";
import { Layout } from "widgets";
import { HomeCard } from "../HomeCard";
import { MobxContext } from "pages/_app";
import { Button, Container, Grid } from "shared/ui";
import { homeVariants } from "pages_flat/Home/lib/utils";
import { IArtworkStore } from "types";

const Home: FC = observer(() => {
  const { pathname } = useRouter();
  const { artworks } = useContext(MobxContext) as IArtworkStore;

  const { scrollXProgress } = useScroll();
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const home = document.querySelector(".home") as HTMLDivElement;
    const body = document.querySelector("body") as HTMLBodyElement;

    if (pathname === "/") {
      // body.style.overflowX = "auto";
      body.style.overflowY = "hidden";

      body.style.background = "#DDDDDD";

      // header.style.position = "fixed";

      const setScrollStep = (event: WheelEvent) => {
        if (event.deltaY > 0) {
          window.scrollBy(body.offsetWidth / 4, 0);
        }
        else if (event.deltaY < 0) {
          window.scrollBy(-body.offsetWidth / 4, 0);
        }
      };

      if (window.innerWidth > 980) {
        home.addEventListener("wheel", setScrollStep);
        body.style.overflowX = "auto";
      } else {
        home.removeEventListener("wheel", setScrollStep);
        // header.style.position = "absolute";
        home.style.overflowX = "hidden";
        body.style.overflowY = "auto";
      }

    }
  }, [pathname]);

  return (
    <Layout title="Главная" description="Главная страница частной галереи Омара Муртузалиевича.">
      <Container>
        <section>
          <Grid className="home" columns={2}>

            <AnimatePresence>
              {!toolsStore.isSearch &&
                <motion.div
                  className="home__info"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  custom={{ x: -20 }}
                  variants={homeVariants}
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
              {!toolsStore.isSearch &&
                <motion.div
                  className="home__cards"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={homeVariants}
                >
                  {artworks && artworks.slice(148, 152).map((artwork) => (
                    <Link key={artwork.id} href={`/collection/${artwork.id}`} >
                      <HomeCard key={artwork.id} image={artwork.images[2]} />
                    </Link>
                  ))}
                </motion.div>
              }
            </AnimatePresence>

            <motion.div className="home__progress-bar" style={{ scaleX }} />

          </Grid>
        </section >
      </Container>
    </Layout>
  );
});

export default Home;