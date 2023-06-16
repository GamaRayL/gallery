import { BiEraser } from "react-icons/bi";
import { IInput } from "shared/lib/types";
import Button from "shared/ui/Button/Button";
import { CSSProperties, FC, useEffect, useRef, useState } from "react";

const Input: FC<IInput> = (props) => {
  const [width, setWidth] = useState("320px");
  const pRef = useRef<HTMLParagraphElement>(null);
  const { value, inputRef, setValue, onChange, size, placeholder } = props;

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
        value={value}
        ref={inputRef}
        className="input"
        onChange={onChange}
        style={{
          "--width": `${width}`,
          "--f-size": `${size}px`
        } as CSSProperties}
        placeholder={placeholder || "Поиск"}
      >
      </input>
      <p
        ref={pRef}
        className="input-helper"
        style={{ "--f-size": `${size}px` } as CSSProperties}
      >
        {value}
      </p>
      {value
        && <Button
          onClick={onClickHandler}
          icon={<BiEraser size={size} opacity={0.3} />}
        />}
    </div>
  );
};

export default Input;