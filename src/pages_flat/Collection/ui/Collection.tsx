import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { MobxContext } from "pages/_app";
import { IArtwork } from "pages_flat/Collection/lib/types";
import { variants } from "pages_flat/Collection/lib/utils";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { RiArrowUpCircleFill} from "react-icons/ri";
import { Button, Card, Container, Grid } from "shared/ui";
import { IArtworkStore } from "store/artworkStore";
import store from "store/store";
import { Filter, Layout } from "widgets";

const Collection: FC = observer(() => {
  const { pathname } = useRouter();
  const [isInfo, setInfo] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const columns = store.columns;
  const [cardInfo, setCardInfo] = useState<{ name: string; year: string; }>();
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

  const getScrollToTop = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout title="Коллекция" description="Раздел 'Коллекции' сайта частной галереи. Присутствует фильтр.">

      <section className="collection" ref={ref}>
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
          custom={{ delay: .4 }}
          className="collection__filter"
        >
          <Filter />
        </motion.section>

        {!store.isFilter &&
          <>
            <Container>
              <motion.p
                variants={variants}
                initial="hidden"
                animate="visible"
                custom={{ delay: .6 }}
                className="collection__result"
              >
                {getCorrectEnd(filteredArtworks.length)}
              </motion.p>
            </Container>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={{ delay: store.isFilter ? .2 : .6, y: -100 }}
            >
              <Container>
                <Grid columns={columns}>
                  {
                    filteredArtworks.length
                      ? filteredArtworks.map(({ id, name, images, year }: IArtwork) => (
                        <div
                          style={{ textAlign: "center" }}
                          onMouseMove={() => setInfo(true)}
                          onMouseOut={() => setInfo(false)}
                          key={id}
                        >
                          <Link href={`/collection/${id}`}>
                            <Card
                              year={year}
                              name={name}
                              setCardInfo={setCardInfo}
                              src={columns >= 4 ? images[1] : images[2]}
                            />
                          </Link>
                        </div>
                      ))
                      : <div>Картины не найдены</div>
                  }
                </Grid>
              </Container>
              <AnimatePresence>
                {isInfo &&
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{
                      type: "keyframes",
                      duration: .5,
                    }}
                    style={{
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                      color: "white",
                      borderBottomRightRadius: 4,
                      background: "#3f3939eb",
                      padding: 10,
                      position: "fixed",
                      zIndex: 1000,
                      pointerEvents: "none",
                      left: "40vh",
                      width: "50vw",
                      bottom: 0,
                      textAlign: "center"
                    }}
                  >
                    <motion.p initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }} transition={{
                        type: "spring",
                        delay: .4
                      }} className="collection__name">{`"${cardInfo?.name}"`}</motion.p>
                    <motion.p initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }} transition={{
                        type: "spring",
                        delay: .8
                      }} className="collection__year">{cardInfo?.year && `${cardInfo.year} год`}</motion.p>
                  </motion.div>
                }
              </AnimatePresence>
            </motion.div>

          </>
        }

        <Button
          className="collection__btn--up"
          icon={<RiArrowUpCircleFill size={60} />}
          onClick={getScrollToTop}
        />
      </section>

    </Layout>
  );
});

export default Collection;