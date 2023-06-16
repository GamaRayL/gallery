import Link from "next/link";
import { Layout } from "widgets";
import { FC, useEffect } from "react";
import { IArtworksData } from "types";
import { IArtwork } from "types/index";
import { HomeCard } from "../HomeCard";
import { useRouter } from "next/router";
import toolsStore from "store/ToolsStore";
import { observer } from "mobx-react-lite";
import { BiRightArrowAlt } from "react-icons/bi";
import { Button, Container, Grid } from "shared/ui";
import { motion, AnimatePresence } from "framer-motion";
import { homeVariants } from "pages_flat/Home/lib/utils";

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
      <Container>
        <section>
          <Grid className="home" columns={2}>
            
            <AnimatePresence>
              {!toolsStore.isSearch &&
                <motion.div
                  exit="hidden"
                  initial="hidden"
                  animate="visible"
                  custom={{ x: -40 }}
                  className="home__info"
                  variants={homeVariants}
                >
                  <h1 className="home__title">
                    Откройте <br /> для себя <br /> галерею картин
                  </h1>
                  <p className="home__paragraph">
                    Добро пожаловать в частную галерею <br /> Омара Омарова!</p>
                  <Button
                    href="/collection"
                    iconPosition="before"
                    className="home__button"
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
                  exit="hidden"
                  initial="hidden"
                  animate="visible"
                  custom={{ x: 140 }}
                  variants={homeVariants}
                  className="home__cards"
                >
                  {artworks && artworks.map((artwork: IArtwork) => (
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