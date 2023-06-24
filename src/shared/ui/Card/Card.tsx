import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";
import { ICard } from "shared/lib/types";
import { homeCardVariants } from "pages_flat/Home/HomeCard/lib/utils";

const Card: FC<ICard> = (props) => {
  const { children, src, year, className, name, onClick, setCardInfo } = props;

  return (
    <motion.div
      onClick={onClick}
      whileTap="whileTap"
      whileHover="whileHover"
      variants={homeCardVariants}
      className={classNames(className, "card")}
      onMouseOver={setCardInfo && (() => setCardInfo({ name: name, year: year }))}
    >
      <div className="card__helper">
        <Image
          fill
          src={src}
          alt="Card"
          unoptimized
          className="card__image"
          sizes="(min-width: 768px) 100vw"
        />
        {children}
      </div>
    </motion.div>
  );
};

export default Card;