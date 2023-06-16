import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import toolsStore from "store/ToolsStore";
import { Layout } from "widgets";
import { HomeCard } from "../HomeCard";
import { Button, Container, Grid } from "shared/ui";
import { homeVariants } from "pages_flat/Home/lib/utils";
import { IArtworksData } from "types";

const Home: FC<IArtworksData> = observer(({ artworks }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    const home = document.querySelector(".home") as HTMLDivElement;
    const body = document.querySelector("body") as HTMLBodyElement;

    if (pathname == "/") {
      body.style.overflowY = "hidden";

      body.style.background = "#DDDDDD";

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
        home.style.overflowX = "hidden";
        body.style.overflowY = "auto";
      }
    }
  }, [pathname]);

  return (
    <Layout title="Главная" description="Главная страница частной галереи Омара Муртузалиевича.">
      <Container className="home-container">
        <section>
          <Grid className="home" columns={2}>

            <AnimatePresence>
              {!toolsStore.isSearch &&
                <motion.div
                  className="home__info"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  custom={{ x: -40 }}
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
                  custom={{ x: 140 }}
                  variants={homeVariants}
                >
                  {artworks && artworks.map((artwork: any) => (
                    <Link key={artwork.id} href={`/collection/${artwork.id}`} >
                      <HomeCard key={artwork.id} image={artwork.images[2]} />
                    </Link>
                  ))}
                </motion.div>
              }
            </AnimatePresence>
          </Grid>
        </section >
      </Container>
    </Layout>
  );
});

export default Home;