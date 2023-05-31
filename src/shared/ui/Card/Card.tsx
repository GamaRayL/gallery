import { FC } from "react";
import { motion } from "framer-motion";
import { ICard } from "shared/lib/types";
import classNames from "classnames";
import Image from "next/image";

const Card: FC<ICard> = ({ children, className, onClick, loader, src }) => {
  return (
    <motion.div
      className={classNames(className, "card")}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      <div className="card__helper">
        <Image
          className="card__image"
          // placeholder="blur"
          // blurDataURL={src}
          // loader={loader}
          sizes="(min-width: 768px) 100vw"
          src={src}
          alt="Card"
          fill
        />
        {children}
      </div>
    </motion.div>
  );
};

export default Card;