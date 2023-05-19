import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { BiEraser } from "react-icons/bi";
import { IInput } from "shared/lib/types";
import Button from "shared/ui/Button/Button";

const Input: FC<IInput> = (props) => {
  const { value, inputRef, setValue, onChange, size, placeholder } = props;
  const pRef = useRef<HTMLParagraphElement>(null);
  const [width, setWidth] = useState("320px");

  useEffect(() => {
    if (pRef.current !== null) {
      pRef.current.style.display = "block";
      const test = getComputedStyle(pRef.current).getPropertyValue("width");

      value && setWidth(test);
      !value && setWidth("320px");

      pRef.current.style.display = "none";
    }
  }, [value, width]);


  const onClickHandler = () => {
    setValue?.("");
  };


  return (
    <div className="input-wrapper">
      <input
        type="text"
        style={{
          "--width": `${width}`,
          "--f-size": `${size}px`
        } as CSSProperties}
        className="input"
        placeholder={placeholder || "Поиск"}
        ref={inputRef}
        value={value}
        onChange={onChange}
      >
      </input>
      <p
        className="input-helper"
        ref={pRef}
        style={{ "--f-size": `${size}px` } as CSSProperties}
      >
        {value}
      </p>
      {value
        && <Button
          icon={<BiEraser size={size} opacity={0.3} />}
          onClick={onClickHandler}
        />}
    </div>
  );
};

export default Input;