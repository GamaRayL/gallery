import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { Button, Container, Grid } from "shared/ui";
import dynamic from 'next/dynamic';
import { observer } from "mobx-react-lite";
import { RiSearchEyeLine } from "react-icons/ri";
import Carousel from "pages_flat/Artwork/ui/Carousel";
import store from "store/store";
import { Layout } from "widgets";
import { IArtworkDataSingle } from "pages_flat/Collection/lib/types";

const DynamicArt = dynamic(() => import('./ArtworkScene'), {
  ssr: false,
});

const Artwork: FC<IArtworkDataSingle> = observer(({ artwork }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    const header = document.querySelector(".header") as HTMLElement;

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

          <Button
            className="artwork__button"
            onClick={() => store.toggleOrbitControls()}
            icon={<RiSearchEyeLine size={36} color="white" />}
          />

          <div className="artwork__description">
            <h1 className="artwork__title">{artwork.name}</h1>
            <p className="artwork__age">{artwork.year}</p>
            <p className="artwork__author">
              {artwork.artist_name}
              <span className="artwork__author-age"> ({artwork.year})</span>
            </p>
            <div className="artwork__technique">
              <span className="artwork__property">Техника:</span>
              <span className="artwork__value">{artwork.technique}</span>
            </div>
            <div className="artwork__size">
              <span className="artwork__property">Размер:</span>
              <span className="artwork__value">{artwork.width}х{artwork.height}</span>
            </div>
          </div>



          <Carousel className="artwork__carousel" />

        </Grid>
      </Container>
    </Layout>
  );
});

export default Artwork;