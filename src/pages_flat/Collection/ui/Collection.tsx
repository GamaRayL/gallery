import Link from "next/link";
import { useRouter } from "next/router";
import { Filter, Layout } from "widgets";
import { MobxContext } from "pages/_app";
import toolsStore from "store/ToolsStore";
import { observer } from "mobx-react-lite";
import { IArtwork, IArtworkStore } from "types";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Container, Grid, Popup } from "shared/ui";
import { FC, useContext, useEffect, useState } from "react";
import { collectionVariants, getCorrectEnd } from "pages_flat/Collection/lib/utils";

const Collection: FC = observer(() => {
  const { pathname } = useRouter();
  const [isInfo, setInfo] = useState(false);
  const { filteredArtworks } = useContext(MobxContext) as IArtworkStore;
  const [cardInfo, setCardInfo] = useState<{ name: string; year: string; }>();

  const columns = toolsStore.columns;
  const delay = toolsStore.isFilter ? .2 : .6;

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (pathname == "/collection") {
      body.style.overflowY = "auto";
      body.style.overflowX = "hidden";

      body.style.background = "#DDDDDD";
    }
  }, [pathname]);

  return (
    <Layout
      title="Коллекция"
      description="Раздел 'Коллекции' сайта частной галереи. Присутствует фильтр.">

      <section className="collection">
        <Container>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={collectionVariants}
            className="collection__title"
          >
            Коллекция
          </motion.h1>
        </Container>

        <motion.section
          initial="hidden"
          animate="visible"
          custom={{ delay: .4 }}
          variants={collectionVariants}
          className="collection__filter"
        >
          <Filter />
        </motion.section>

        {!toolsStore.isFilter &&
          <>
            <Container>
              <motion.p
                initial="hidden"
                animate="visible"
                custom={{ delay: .6 }}
                variants={collectionVariants}
                className="collection__result"
              >
                {getCorrectEnd(filteredArtworks.length)}
              </motion.p>
            </Container>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={collectionVariants}
              custom={{ delay: delay, y: -100 }}
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
                      : <div className="collection__not-found">Картины не найдены</div>
                  }
                </Grid>
              </Container>
            </motion.div>
          </>
        }

        <AnimatePresence>
          {isInfo &&
            <Popup className="collection__popup">
              <motion.p
                initial="hidden"
                animate="visible"
                className="collection__name"
                variants={collectionVariants}
                custom={{ delay: .4, y: 20, type: "spring" }}
              >
                {cardInfo?.name}
              </motion.p>
              <motion.p
                initial="hidden"
                animate="visible"
                className="collection__year"
                variants={collectionVariants}
                custom={{ delay: .6, y: 20, type: "spring" }}
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