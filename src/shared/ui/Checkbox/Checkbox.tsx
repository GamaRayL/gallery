import { FC } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { ICheckbox } from "shared/lib/types";

const Checkbox: FC<ICheckbox> = (props) => {
  const { label, count, className, checked, onClick } = props;

  return (
    <motion.label
      className={classNames(className, "checkbox")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
    >
      <input
        className="checkbox__input"
        type="checkbox"
        name="checkbox"
        defaultChecked={checked}
        onClick={(event) => event.stopPropagation()}
      />
      <div>
        <div className="checkbox__icon"></div>
      </div>
      <span className="checkbox__label">{label || "-"}</span>
      {count && <span className="checkbox__count">{count}</span>}
    </motion.label>
  );
};

export default Checkbox;