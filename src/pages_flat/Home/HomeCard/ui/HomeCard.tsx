import { FC, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { homeCardVariants } from "pages_flat/Home/HomeCard/lib/utils";
import { IHome } from "../lib/types";

const HomeCard: FC<IHome> = ({ image }) => {
  return (
    <motion.div
      className="home-card"
      whileTap="whileTap"
      whileHover="whileHover"
      variants={homeCardVariants}
      initial="initial"
    >
      <div className="home-card__image">
        <Image
          fill
          priority
          src={image}
          alt="Карточка картины"
          style={{ objectFit: "cover" }}
          sizes="(min-width: 768px) 100vw"
        />
      </div>
    </motion.div>
  );
};

export default HomeCard;
