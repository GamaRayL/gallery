import Image from "next/image";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Placeholder } from "shared/ui";
import { IHomeCard } from "../lib/types";
import { homeCardVariants } from "pages_flat/Home/HomeCard/lib/utils";

const HomeCard: FC<IHomeCard> = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial="initial"
      whileTap="whileTap"
      className="home-card"
      whileHover="whileHover"
      variants={homeCardVariants}
    >
      {isLoading && <Placeholder sizePercent="100" />}
      <Image
        fill
        priority
        src={image}
        alt="Карточка картины"
        className="home-card__image"
        sizes="(min-width: 768px) 100vw"
        onLoad={() => setIsLoading(false)}
      />
    </motion.div>
  );
};

export default HomeCard;
