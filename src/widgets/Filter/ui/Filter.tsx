import store from "app/store";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { ChangeEvent, FC, useRef, useState } from "react";
import { BiCategory, BiFilter, BiSearch, BiSquare, BiUpArrow } from "react-icons/bi";
import { Button, Checkbox, Container, Grid, Input, InputRange } from "shared/ui";

const Filter: FC = observer(() => {

  const btnSize = 26;
  const ref = useRef<HTMLDivElement>(null);
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

  const onClickScrollHandler = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    store.toggleFilterOverlay();
    const body = document.querySelector("body") as HTMLBodyElement;

    body.style.overflowY !== "hidden"
      ? body.style.overflowY = "hidden"
      : body.style.overflowY = "auto";

    !store.isFilter && window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Container>
        <div className={classNames("filter")} ref={ref}>
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
              onClick={onClickScrollHandler}
            >
              Фильтр
            </Button>
          </div>
        </div>
      </Container>

      {store.isFilter &&
        <div className="expand">
          <Container>
            <Grid columns={23}>
              <div className="expand__item">
                <Button
                  className="expand__btn"
                  icon={<BiUpArrow size={22} />}
                  justify="space-between"
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
              <div className="expand__item">
                <Button
                  className="expand__btn"
                  icon={<BiUpArrow size={22} />}
                  justify="space-between"
                >
                  Техника
                  <span className="expand__count">1234</span>
                </Button>
                <Checkbox
                  className="expand__checkbox"
                  label="холст/масло"
                  count="1444" />
                <Checkbox
                  className="expand__checkbox"
                  label="картон/масло"
                  count="1444" />
                <Checkbox
                  className="expand__checkbox"
                  label="оргалит/масло"
                  count="1444" />
              </div>
              <div className="expand__item">
                <Button
                  className="expand__btn"
                  icon={<BiUpArrow size={22} />}
                  justify="space-between"
                >
                  Год
                  <span className="expand__count">14</span>
                </Button>
                <Checkbox
                  className="expand__checkbox"
                  label="1856 - 1866"
                  count="1444" />
                <Checkbox
                  className="expand__checkbox"
                  label="1867 - 1877"
                  count="1444" />
                <Checkbox
                  className="expand__checkbox"
                  label="1878 - 1888"
                  count="1444" />
              </div>
            </Grid>
          </Container>
        </div>
      }
    </>
  );
});

export default Filter;