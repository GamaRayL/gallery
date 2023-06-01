import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import { ICheckbox } from "shared/lib/types";

const Checkbox: FC<ICheckbox> = (props) => {
  const { label, count, className, checked, onClick } = props;

  return (
    <motion.label
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween" }}
      className={classNames(className, "checkbox")}
      onClick={onClick}
    >
      <input
        className="checkbox__input"
        type="checkbox"
        name="checkbox"
        defaultChecked={checked}
      />
      <div>
        <div className="checkbox__icon"></div>
      </div>
      {label && <span className="checkbox__label">{label}</span>}
      {count && <span className="checkbox__count">{count}</span>}
    </motion.label>
  );
};

export default Checkbox;