import { FC, ChangeEvent, useEffect, useRef, useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import store from "store/ToolsStore";
import { Button, Input } from "shared/ui";
import { formVariants } from "shared/lib/utils";

const Form: FC = () => {
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
          size={24}
          value={value}
          inputRef={inputRef}
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
        initial="hidden"
        animate="visible"
        variants={formVariants}
      />
    </form>
  );
};

export default Form;