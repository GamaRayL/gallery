import { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Button, Container } from "shared/ui";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { observer } from "mobx-react-lite";
import { HomeCard } from "pages_flat/Home/HomeCard";
import store from "store/store";
import { Layout } from "widgets";
import { IArtworksData } from "pages_flat/Collection/lib/types";
import { MobxContext } from "pages/_app";
import { IArtworkStore } from "store/artworkStore";
import Link from "next/link";

const Home: FC = observer(() => {
  const { pathname } = useRouter();
  const { scrollXProgress } = useScroll();
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { artworks } = useContext(MobxContext) as IArtworkStore;

  useEffect(() => {
    const home = document.querySelector(".home") as HTMLDivElement;
    const body = document.querySelector("body") as HTMLBodyElement;
    const header = document.querySelector(".header") as HTMLElement;

    if (pathname === "/") {
      body.style.overflowX = "auto";
      body.style.overflowY = "hidden";

      body.style.background = "#DDDDDD";

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
    <Layout title="Главная" description="Главная страница частной галереи Омара Муртузалиевича">
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
                {artworks.slice(148, 152).map((artwork) => (
                  <Link href={`/collection/${artwork.id}`} key={artwork.id}>
                    <HomeCard key={artwork.id} image={artwork.images[2]} />
                  </Link>
                ))}
              </motion.div>
            }
          </AnimatePresence>
          <motion.div className="progress-bar" style={{ scaleX }} />
        </section >
      </Container>
    </Layout>
  );
});

export default Home;