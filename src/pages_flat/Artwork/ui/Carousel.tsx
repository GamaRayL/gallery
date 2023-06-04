import { FC, useEffect, useRef, useState } from 'react';
import { MotionProps, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from "next/image";
import classNames from "classnames";
import { IArtwork } from "pages_flat/Collection/lib/types";
import { Card } from "shared/ui";
import Link from "next/link";

interface ICarousel {
  className?: string;
  artworks: IArtwork[];
}
const Carousel: FC<ICarousel> = ({ className, artworks }) => {

  return (
    <motion.div className={classNames(className, "carousel")}>
      {artworks.map(artwork => {
        return (
          <motion.div className="carousel__item" key={artwork.id}>
            <Link href={`/collection/${artwork.id}`} >
              <Card {...artwork} src={artwork.images[1]} />
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Carousel;
