import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Container, Grid } from "shared/ui";
import dynamic from 'next/dynamic';
import { observer } from "mobx-react-lite";
import { RiSearchEyeLine } from "react-icons/ri";
import Carousel from "pages_flat/Artwork/ui/Carousel";
import store from "store/store";
import { Layout } from "widgets";

const DynamicArt = dynamic(() => import('./ArtworkScene'), {
  ssr: false,
});

const Artwork = observer(() => {
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
            <DynamicArt />
          </div>

          <Button
            className="artwork__button"
            onClick={() => store.toggleOrbitControls()}
            icon={<RiSearchEyeLine size={36} color="white" />}
          />

          <div className="artwork__description">
            <h1 className="artwork__title">Натюрморт с ананасом</h1>
            <p className="artwork__age">1971</p>
            <p className="artwork__author">
              Конопацкая Галина Павловна
              <span className="artwork__author-age"> (1911-1988)</span>
            </p>
            <div className="artwork__technique">
              <span className="artwork__property">Техника:</span>
              <span className="artwork__value">холст/масло</span>
            </div>
            <div className="artwork__size">
              <span className="artwork__property">Размер:</span>
              <span className="artwork__value">91х102</span>
            </div>
          </div>



          <Carousel className="artwork__carousel" />

        </Grid>
      </Container>
    </Layout>
  );
});

export default Artwork;