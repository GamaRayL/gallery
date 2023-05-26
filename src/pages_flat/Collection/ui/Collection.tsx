import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { array, variants } from "pages_flat/Collection/lib/utils";
import { FC, useEffect } from "react";
import { Card, Container, Grid } from "shared/ui";
import store from "store";
import { Filter, Layout } from "widgets";


const Collection: FC = observer(() => {
  const { pathname } = useRouter();

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
            Результат
          </motion.p>
        </Container>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={{ delay: .9, y: -100 }}
        >
          <Container>
            <Grid columns={store.columns}>
              {array.map(i => (
                <Link key={i.id} href={`/collection/${i.id}`}>
                  <Card loader={store.getImageBySize} src={i.image} />
                </Link>
              ))}
            </Grid>
          </Container>
        </motion.div>
      </section >
    </Layout>
  );
});

export default Collection;