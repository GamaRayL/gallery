import { FC } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { ICheckbox } from "shared/lib/types";

const Checkbox: FC<ICheckbox> = (props) => {
  const { label, count, className, checked, onClick } = props;

  return (
    <motion.label
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classNames(className, "checkbox")}
    >
      <input
        type="checkbox"
        name="checkbox"
        defaultChecked={checked}
        className="checkbox__input"
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