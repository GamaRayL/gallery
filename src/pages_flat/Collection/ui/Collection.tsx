import { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import store from "store/ToolsStore";
import { MobxContext } from "pages/_app";
import { collectionVariants, getCorrectEnd } from "pages_flat/Collection/lib/utils";
import { Filter, Layout } from "widgets";
import { Card, Container, Grid, Popup } from "shared/ui";
import { IArtwork, IArtworkStore } from "types";

const Collection: FC = observer(() => {
  const { pathname } = useRouter();
  const [isInfo, setInfo] = useState(false);
  const [cardInfo, setCardInfo] = useState<{ name: string; year: string; }>();
  const { filteredArtworks } = useContext(MobxContext) as IArtworkStore;

  const columns = store.columns;

  const delay = store.isFilter ? .2 : .6;

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (pathname == "/collection") {
      body.style.overflowX = "hidden";
      body.style.overflowY = "auto";

      body.style.background = "#DDDDDD";

    }

  }, [pathname]);



  return (
    <Layout
      title="Коллекция"
      description="Раздел 'Коллекции' сайта частной галереи. Присутствует фильтр.">

      <section className="collection" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Container>
          <motion.h1
            className="collection__title"
            initial="hidden"
            animate="visible"
            variants={collectionVariants}
          >
            Коллекция
          </motion.h1>
        </Container>

        <motion.section
          className="collection__filter"
          initial="hidden"
          animate="visible"
          custom={{ delay: .4 }}
          variants={collectionVariants}
        >
          <Filter />
        </motion.section>

        {!store.isFilter &&
          <>
            <Container>
              <motion.p
                className="collection__result"
                initial="hidden"
                animate="visible"
                custom={{ delay: .6 }}
                variants={collectionVariants}
              >
                {getCorrectEnd(filteredArtworks.length)}
              </motion.p>
            </Container>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: delay, y: -100 }}
              variants={collectionVariants}
              style={{ width: "100%" }}
            >
              <Container>
                <Grid columns={columns}>
                  {
                    filteredArtworks.length
                      ? filteredArtworks.map(({ id, name, images, year }: IArtwork) => (
                        <Link
                          key={id}
                          href={`/collection/${id}`}
                          onMouseMove={() => setInfo(true)}
                          onMouseOut={() => setInfo(false)}
                        >
                          <Card
                            year={year}
                            name={name}
                            setCardInfo={setCardInfo}
                            src={columns >= 4 ? images[1] : images[2]}
                          />
                        </Link>
                      ))
                      : <div style={{ whiteSpace: "nowrap" }}>Картины не найдены</div>
                  }
                </Grid>
              </Container>
            </motion.div>
          </>
        }

        <AnimatePresence>
          {isInfo &&
            <Popup>
              <motion.p
                className="collection__name"
                initial="hidden"
                animate="visible"
                custom={{ delay: .4, y: 20, type: "spring" }}
                variants={collectionVariants}
              >
                {cardInfo?.name}
              </motion.p>
              <motion.p
                className="collection__year"
                initial="hidden"
                animate="visible"
                custom={{ delay: .6, y: 20, type: "spring" }}
                variants={collectionVariants}
              >
                {cardInfo?.year && `${cardInfo.year} год`}
              </motion.p>
            </Popup>
          }
        </AnimatePresence>


      </section>
    </Layout>
  );
});

export default Collection;