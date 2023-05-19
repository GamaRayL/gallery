import { FC } from "react";
import { IInputRange } from "shared/lib/types";

const InputRange: FC<IInputRange> = (props) => {
  const { onChange, value, min, max } = props;
  return (
    <input
      className="input-range"
      type="range"
      name="range"
      min={min || 1}
      max={max || 5}
      value={value || (5 / 2)}
      onChange={onChange}
    // value={value}
    />
  );
};

export default InputRange;