import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion } from "framer-motion";
import { BiCube } from "react-icons/bi";
import toolsStore from "store/ToolsStore";
import { Layout } from "widgets";
import { infoChildVariants } from "pages_flat/Artwork/lib/utils";
import Carousel from "pages_flat/Artwork/Carousel/ui/Carousel";
import { Button, Container, Grid, Popup } from "shared/ui";
import { IArtworkTistDataSingle } from "types";
import { Placeholder } from "pages_flat/Artwork/Placeholder";

const DynamicArt = dynamic(() => import('widgets/ArtworkScene/ui/ArtworkScene'), {
  ssr: false,
});

const Artwork: FC<IArtworkTistDataSingle> = observer(({ artwork, artist }) => {
  const { pathname, asPath } = useRouter();

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    toolsStore.setTexture(null);

    console.log(asPath);
    body.style.overflowX = "hidden";
    body.style.overflowY = "auto";

    body.style.background = "#46413B";

  }, [asPath]);

  return (
    <Layout title="Картина" description="Картина с работами автора и её описание.">
      <Container>
        <Grid className="artwork" columns={14}>

          <div className="artwork__image-conatiner">
            {!toolsStore.texture && <Placeholder />}
            <DynamicArt art={artwork.images[0]} />

            <div className="artwork__tool">
              <Button
                className="artwork__tool-btn"
                onClick={() => toolsStore.toggleOrbitControls()}
                icon={<BiCube
                  size={toolsStore.isOrbitControls ? 64 : 44}
                  color="white" />} />
            </div>
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
              <span className="artwork__property">Размер: </span>
              <span className="artwork__value">{artwork.width ? `${artwork.width}х${artwork.height}` : "-"}</span>
            </div>
          </div>

          <AnimatePresence>
            {toolsStore.isOrbitControls &&
              <Popup className="artwork__popup" color="black" bgColor="white">
                <motion.p
                  variants={infoChildVariants}
                  initial="hidden"
                  animate="visible"
                  className="collection__name">
                  Вы в режиме работы с картиной
                </motion.p>
              </Popup>
            }
          </AnimatePresence>

          <Carousel className="artwork__carousel" artworks={artist.artworks} />

        </Grid>
      </Container>
    </Layout>
  );
});

export default Artwork;