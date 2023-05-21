import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import { Button } from "shared/ui";
import Input from "shared/ui/Input/Input";
import store from "app/store";
import { motion } from "framer-motion";

const Form = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.focus();
  }, []);

  return (
    <form className="form">
      <div className="form__wrapper">
        <Input
          inputRef={inputRef}
          size={24}
          value={value}
          setValue={setValue}
          onChange={onChangeHandler}
        />
        <Button
          className="form__btn_search"
          icon={<BiSearch size={36} />}
        />
        <Button
          icon={<BiX size={52} />}
          onClick={() => store.toggleSearchOverlay()}
        />
      </div>
      <motion.hr
        className="form__line"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1, width: "100%" }}
        transition={{
          type: "tween",
          delay: 0.6,
          duration: 1,
        }}
      />
    </form>
  );
};

export default Form;