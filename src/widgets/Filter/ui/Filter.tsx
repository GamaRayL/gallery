import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { MobxContext } from "pages/_app";
import { ChangeEvent, FC, FormEvent, useContext, useRef, useState } from "react";
import { BiCategory, BiFilter, BiSearch, BiSquare } from "react-icons/bi";
import { Button, Container, Grid, Input, InputRange } from "shared/ui";
import { IArtworkStore } from "store/artworkStore";
import store from "store/store";
import { ExpandItem } from "widgets/Filter/ui/ExpandItem";


const Filter: FC = observer(() => {
  const btnSize = 26;
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const {
    setSearchParam,
    uniqueArtists,
    uniqueTechniques,
    toggleArtistParam,
    artistParam
  } = useContext(MobxContext) as IArtworkStore;

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

  const onSubmitSearchArtwork = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParam(value);
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

  const onClickSelectHandler = (id: number/* , name: string */) => {
    // if (id) {
    toggleArtistParam(id);
    // }
  };

  const onCheckedHandler = (id: number, name: string) => {
    if (id) {
      // return true;
      return artistParam.includes(id);
    } else if (name) {
      return false;
    }
  };

  return (
    <>
      <Container>
        <div className={classNames("filter")} ref={ref}>
          <div className="filter__field">
            <form className="filter__form" onSubmit={onSubmitSearchArtwork}>
              <Input
                value={value}
                setValue={setValue}
                size={18}
                placeholder="Найти картину"
                onChange={onChangeInputHandler}
              />
              <Button type="submit" icon={<BiSearch size={btnSize} />} />
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
              <ExpandItem
                title="Художник"
                items={uniqueArtists}
                onChecked={onCheckedHandler}
                onClick={onClickSelectHandler}
              />
              <ExpandItem
                title="Техника"
                items={uniqueTechniques}
                onChecked={onCheckedHandler}
                onClick={onClickSelectHandler}
              />
              {/* <ExpandItem items={uniqueArtists} title="Годы создания"/> */}
            </Grid>
          </Container>
        </div>
      }
    </>
  );
});

export default Filter;