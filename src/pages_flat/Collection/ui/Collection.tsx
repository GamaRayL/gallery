import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { MobxContext } from "pages/_app";
import { IArtwork } from "pages_flat/Collection/lib/types";
import { variants } from "pages_flat/Collection/lib/utils";
import { FC, useContext, useEffect } from "react";
import { Card, Container, Grid } from "shared/ui";
import { IArtworkStore } from "store/artworkStore";
import store from "store/store";
import { Filter, Layout } from "widgets";

const Collection: FC = observer(() => {
  const { pathname } = useRouter();
  const columns = store.columns;
  const { filteredArtworks } = useContext(MobxContext) as IArtworkStore;

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    const header = document.querySelector(".header") as HTMLElement;

    if (pathname == "/collection") {
      body.style.overflowX = "hidden";
      body.style.overflowY = "auto";

      body.style.background = "#DDDDDD";

      header.style.position = "absolute";
    }

  }, [pathname]);

  const getCorrectEnd = (value: number) => {
    const n = value % 10;
    const n1 = value % 100;
    if (n1 > 10 && n1 < 20) return `${value} картин`;
    if (n > 1 && n < 5) return `${value} картины`;
    if (n === 1) return `${value} картина`;
    if (value == 0) return `${value} картин`;
    return `${value} картины`;
  };


  return (
    <Layout title="Коллекция" description="Раздел 'Коллекции' сайта частной галереи. Присутствует фильтр.">
      <section className="collection">
        <Container>
          <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            className="collection__title">
            Коллекция
          </motion.h1>
        </Container>

        <motion.section
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={{ delay: .8 }}
          className="collection__filter"
        >
          <Filter />
        </motion.section>

        <Container>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={{ delay: .9, }}
            className="collection__result"
          >
            {getCorrectEnd(filteredArtworks.length)}
          </motion.p>
        </Container>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={{ delay: .9, y: -100 }}
        >
          <Container>
            <Grid columns={columns}>
              {
                filteredArtworks.length
                  ? filteredArtworks.map(({ id, name, images }: IArtwork) => (
                    <div style={{ textAlign: "center" }} key={id}>
                      <Link href={`/collection/${id}`}>
                        <Card /* loader={store.getImageBySize} */ src={columns >= 4 ? images[1] : images[2]} />
                      </Link>
                      <span style={{ color: "black", textDecoration: "none" }}>{name}</span>
                    </div>
                  ))
                  : <div>Картины не найдены</div>
              }
            </Grid>
          </Container>
        </motion.div>
      </section >
    </Layout>
  );
});

export default Collection;