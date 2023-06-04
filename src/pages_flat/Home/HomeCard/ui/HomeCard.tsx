import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface IHome {
  image: string;
}

const HomeCard: FC<IHome> = ({ image }) => {

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "tween", stiffness: 400, damping: 17 }}
      className="home-card"
    >
      <div className="home-card__image">
        <Image src={image} fill style={{ objectFit: "cover" }} priority sizes="(min-width: 768px) 100vw" alt="Picture" />
      </div>
    </motion.div>
  );
};

export default HomeCard;
