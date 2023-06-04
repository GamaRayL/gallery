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
      className={classNames(className, "card")}
      onClick={onClick}
      whileTap="whileTap"
      whileHover="whileHover"
      variants={homeCardVariants}
      onMouseOver={setCardInfo && (() => setCardInfo({ name: name, year: year }))}
    >
      <div className="card__helper">
        <Image
          className="card__image"
          sizes="(min-width: 768px) 100vw"
          alt="Card"
          src={src}
          fill
        />
        {children}
      </div>
    </motion.div>
  );
};

export default Card;