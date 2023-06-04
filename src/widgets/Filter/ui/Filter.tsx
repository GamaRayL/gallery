import { ChangeEvent, FC, FormEvent, useContext, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { BiCategory, BiFilter, BiRightArrowAlt, BiSearch, BiSquare } from "react-icons/bi";
import classNames from "classnames";
import { IArtworkStore } from "store/artworkStore";
import store from "store/toolsStore";
import { MobxContext } from "pages/_app";
import { IItem } from "widgets/Filter/lib/types";
import { ExpandItem } from "widgets/Filter/ui/ExpandItem";
import { Button, Container, Grid, Input, InputRange } from "shared/ui";


const Filter: FC = observer(() => {
  const btnSize = 26;
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const {
    setSearchParam,
    toggleArtistParam,
    toggleTechniqueParam,
    uniqueArtists,
    uniqueTechniques,
    artistParam,
    techniqueParam,
    filteredArtworks
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

  const onSelectArtistHandler = (item: IItem) => {
    toggleArtistParam(item.id);
  };

  const onSelectTechniqueHandler = (item: IItem) => {
    toggleTechniqueParam(item.label);
  };


  const onCheckArtistHandler = (item: IItem) => {
    return artistParam.includes(item.id);
  };

  const onCheckTechniqueHandler = (item: IItem) => {
    return techniqueParam.includes(item.label);
  };

  const onClickTotalHandler = () => {
    const body = document.querySelector("body") as HTMLBodyElement;

    body.style.overflowY = "auto";

    store.toggleFilterOverlay();
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
        <div>
          <Container>
            <Grid className="expand-container" columns={23}>
              <ExpandItem
                title="Художник"
                items={uniqueArtists}
                onCheck={onCheckArtistHandler}
                onClick={onSelectArtistHandler}
              />
              <ExpandItem
                title="Техника"
                items={uniqueTechniques}
                onCheck={onCheckTechniqueHandler}
                onClick={onSelectTechniqueHandler}
              />
            </Grid>
          </Container>
          <Button
            className="filter__btn--total"
            iconPosition="after"
            justify="flex-end"
            icon={<BiRightArrowAlt size="40" color="white" />}
            onClick={onClickTotalHandler}
          >
            <span className="filter__label">результат </span>
            <span className="filter__label--total">{filteredArtworks.length}</span>
          </Button>
        </div>
      }
    </>
  );
});

export default Filter;