import { FC } from "react";
import { ICheckbox } from "shared/lib/types";

const Checkbox: FC<ICheckbox> = (props) => {
  const { label, count } = props;

  return (
    <label className="checkbox">
      <input className="checkbox__input" type="checkbox" name="checkbox" />
      <div className="checkbox__icon"></div>
      {label && <span className="checkbox__label">{label}</span>}
      {count && <span className="checkbox__count">{count}</span>}
    </label>
  );
};

export default Checkbox;