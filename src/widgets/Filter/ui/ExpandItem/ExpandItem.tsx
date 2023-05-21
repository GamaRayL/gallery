import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Button, Checkbox } from "shared/ui";

const ExpandItem = () => {
  const [isShow, setShow] = useState(false);

  const onClickExpandHandler = (event: any) => {
    const div = event.currentTarget.closest("div").childNodes[1];

    if (div.style.display == "none") {
      div.style.display = "block";
      setShow(false);
    } else {
      div.style.display = "none";
      setShow(true);
    }
  };

  return (
    <div className="expand__item">
      <Button
        className="expand__btn"
        icon={isShow ? <BiUpArrow size={22} /> : <BiDownArrow size={22} />}
        justify="space-between"
        onClick={onClickExpandHandler}
      >
        Художник
        <span className="expand__count">1234</span>
      </Button>
      <div>
        <Checkbox
          className="expand__checkbox"
          label="Конопацкая Галина Павловна"
          count="1444" />
        <Checkbox
          className="expand__checkbox"
          label="Августович Алексей Иванович"
          count="1444" />
        <Checkbox
          className="expand__checkbox"
          label="Августович Юрий Алексеевич"
          count="1444" />
      </div>
    </div>
  );
};

export default ExpandItem;