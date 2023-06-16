import { motion } from "framer-motion";
import { Button, Input } from "shared/ui";
import toolsStore from "store/ToolsStore";
import { BiSearch, BiX } from "react-icons/bi";
import { formVariants } from "shared/lib/utils";
import { FC, ChangeEvent, useEffect, useRef, useState } from "react";

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
      <motion.div
        exit="hidden"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="form__wrapper"
      >
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
          onClick={() => toolsStore.toggleSearchOverlay()}
        />
      </motion.div>
      <motion.hr
        exit="hidden"
        initial="hidden"
        animate="visible"
        className="form__line"
        variants={formVariants}
      />
    </form>
  );
};

export default Form;