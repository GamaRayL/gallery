import store from "app/store";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { ChangeEvent, FC, useState } from "react";
import { BiCategory, BiFilter, BiSearch, BiSquare } from "react-icons/bi";
import { Button, Input, InputRange } from "shared/ui";
import { IFilter } from "widgets/Filter/lib/types";

const Filter: FC<IFilter> = observer((props) => {
  const { className } = props;

  const btnSize = 26;
  const [value, setValue] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onChangeRangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    store.setColumns(value);
  };

  const onClickIncreaseHandler = () => {
    store.increaseColumns();
  };

  const onClickDecreaseHandler = () => {
    store.decreaseColumns();
  };

  return (
    <div className={classNames(className, "filter")}>
      <div className="filter__field">
        <form className="filter__form">
          <Input
            value={value}
            setValue={setValue}
            size={18}
            placeholder="Найти картину"
            onChange={onChangeInputHandler}
          />
          <Button icon={<BiSearch size={btnSize} />} />
        </form>
      </div>
      <div className="filter__display">
        <Button
          icon={<BiSquare size={btnSize} />}
          onClick={onClickDecreaseHandler}
        />
        <InputRange
          value={store.columns}
          min={1}
          max={6}
          onChange={onChangeRangeHandler}
        />
        <Button
          icon={<BiCategory size={btnSize} />}
          onClick={onClickIncreaseHandler}
        />
      </div>
      <div className="filter__expand">
        <Button
        className="filter__btn"
        icon={<BiFilter size={btnSize} />}
        >
          Фильтр
        </Button>
      </div>
    </div>
  );
});

export default Filter;