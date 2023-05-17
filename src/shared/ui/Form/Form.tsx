import { ChangeEvent, useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import { Button } from "shared/ui";
import Input from "shared/ui/Input/Input";
import store from "app/store";

const Form = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <form className="form">
      <Input size={24} value={value} setValue={setValue} onChange={onChangeHandler} />
      <Button icon={<BiSearch size={42} />} />
      <Button icon={<BiX size={52} />} onClick={() => store.toggleOverlay()} />
    </form>
  );
};

export default Form;