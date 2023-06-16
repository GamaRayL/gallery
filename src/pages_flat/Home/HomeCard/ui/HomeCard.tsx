import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeCardVariants } from "pages_flat/Home/HomeCard/lib/utils";
import { IHomeCard } from "../lib/types";
import { Placeholder } from "pages_flat/Artwork/Placeholder";

const HomeCard: FC<IHomeCard> = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      className="home-card"
      whileTap="whileTap"
      whileHover="whileHover"
      variants={homeCardVariants}
      initial="initial"
    >
      {isLoading && <Placeholder sizePercent="100"/>}
      <Image
        fill
        priority
        src={image}
        alt="Карточка картины"
        sizes="(min-width: 768px) 100vw"
        className="home-card__image"
        onLoad={() => setIsLoading(false)}
      />
    </motion.div>
  );
};

export default HomeCard;
