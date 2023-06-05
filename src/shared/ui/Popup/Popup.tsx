import { FC } from 'react';
import { motion } from "framer-motion";
import { IPopup } from "shared/lib/types";
import classNames from "classnames";

const Popup: FC<IPopup> = ({ children, top, color, bgColor, className }) => {
  const yValue = top ? -100 : 100;

  return (
    <motion.div
      initial={{ y: yValue, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: yValue, opacity: 0 }}
      transition={{
        type: "keyframes",
        duration: .5,
      }}
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
