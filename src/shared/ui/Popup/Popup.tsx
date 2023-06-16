import { FC } from 'react';
import classNames from "classnames";
import { motion } from "framer-motion";
import { IPopup } from "shared/lib/types";
import { popupVariants } from "shared/lib/utils";

const Popup: FC<IPopup> = (props) => {
  const { children, top, color, bgColor, className } = props;
  const yValue = top ? -100 : 100;

  return (
    <motion.div
      exit="hidden"
      initial="hidden"
      animate="visible"
      custom={{ y: yValue }}
      variants={popupVariants}
      className={classNames(className, "popup", {
        "popup_top": top
      })}
      style={{
        color: color || "white",
        background: bgColor || "#3f3939eb",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Popup;
