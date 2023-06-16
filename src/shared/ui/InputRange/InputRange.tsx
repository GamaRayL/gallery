import { FC } from "react";
import { IInputRange } from "shared/lib/types";

const InputRange: FC<IInputRange> = (props) => {
  const { onChange, value, min, max } = props;
  return (
    <input
      type="range"
      name="range"
      min={min || 1}
      max={max || 5}
      onChange={onChange}
      value={value || (5 / 2)}
      className="input-range"
    />
  );
};

export default InputRange;