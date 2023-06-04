import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { Button, Container, Grid } from "shared/ui";
import dynamic from 'next/dynamic';
import { observer } from "mobx-react-lite";
import Carousel from "pages_flat/Artwork/ui/Carousel";
import store from "store/store";
import { Layout } from "widgets";
import { IArtworkTistDataSingle } from "pages_flat/Collection/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { BiCube } from "react-icons/bi";

const DynamicArt = dynamic(() => import('../../../widgets/ArtworkScene/ui/ArtworkScene'), {
  ssr: false,
});

const Artwork: FC<IArtworkTistDataSingle> = observer(({ artwork, artist }) => {
  const { pathname } = useRouter();


  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    const header = document.querySelector(".header") as HTMLElement;

    body.style.overflowX = "hidden";
    body.style.overflowY = "auto";

    body.style.background = "#46413B";

    header.style.position = "absolute";
  }, [pathname]);

  return (
    <Layout title="Картина" description="Картина и её описание.">
      <Container>
        <Grid className="artwork" columns={14}>
          <div className="artwork__image-conatiner">
            <DynamicArt art={artwork.images[0]} />
          </div>

          <div className="artwork__tool">
            <Button
              className="artwork__tool-btn"
              onClick={() => store.toggleOrbitControls()}
              icon={<BiCube size={store.isOrbitControls ? 64 : 44} color="white" />}
            />
          </div>

          <div className="artwork__description">
            <h1 className="artwork__title">{artwork.name}</h1>
            <p className="artwork__age">{artwork.year && `${artwork.year} г.`}</p>
            <p className="artwork__author">
              {artwork.artist_name}
              <span className="artwork__author-age">
                {artist.begin_date ? ` (${artist.begin_date} - ${artist.end_date})` : ""}
              </span>
            </p>
            <div className="artwork__technique">
              <span className="artwork__property">Техника:</span>
              <span className="artwork__value">{artwork.technique ? `${artwork.technique}` : "-"}</span>
            </div>
            <div className="artwork__size">
              <span className="artwork__property">Размер:</span>
              <span className="artwork__value">{artwork.width ? `${artwork.width}х${artwork.height}` : "-"}</span>
            </div>
          </div>
          <AnimatePresence>
            {store.isOrbitControls &&
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
                  color: "black",
                  background: "white",
                  padding: 6,
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
                  }}
                  className="collection__name">
                  Вы в режиме работы с картиной
                </motion.p>
              </motion.div>}
          </AnimatePresence>
          <Carousel className="artwork__carousel" artworks={artist.artworks} />
        </Grid>
      </Container>
    </Layout>
  );
});

export default Artwork;