import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeCardVariants } from "pages_flat/Home/HomeCard/lib/utils";
import { IHomeCard } from "../lib/types";

const HomeCard: FC<IHomeCard> = ({ image }) => {
  return (
    <motion.div
      className="home-card"
      whileTap="whileTap"
      whileHover="whileHover"
      variants={homeCardVariants}
      initial="initial"
    >
      <Image
        fill
        placeholder="blur"
        blurDataURL={image}
        src={image}
        alt="Карточка картины"
        sizes="(min-width: 768px) 100vw"
        className="home-card__image"
      />
    </motion.div>
  );
};

export default HomeCard;
