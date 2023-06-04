import { FC } from 'react';
import Link from "next/link";
import classnames from "classnames";
import { Card, Grid } from "shared/ui";
import { ICarousel } from "../lib/types";

const Carousel: FC<ICarousel> = ({ className, artworks }) => {

  return (
    <Grid className={classnames(className)}>
      {artworks.map(artwork => {
        return (
          <Link key={artwork.id} href={`/collection/${artwork.id}`} >
            <Card {...artwork} src={artwork.images[1]} />
          </Link>
        );
      })}
    </Grid>
  );
};

export default Carousel;
