import { motion } from "framer-motion";
import Image from "next/image";

const Card = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="card">
      <div className="card__body">
        <div className="card__image">
          <Image src={"/p.jpg"} fill style={{ objectFit: "cover" }} priority sizes="400" alt="Picture" className="test" />
        </div>
        <div className="card__title"></div>
      </div>
    </motion.div>
  );
};

export default Card;