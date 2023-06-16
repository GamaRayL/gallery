import classNames from "classnames";
import { IArtworkStore } from "types";
import { MobxContext } from "pages/_app";
import toolsStore from "store/ToolsStore";
import { observer } from "mobx-react-lite";
import { IItem } from "widgets/Filter/lib/types";
import { ExpandItem } from "widgets/Filter/ExpandItem";
import { Button, Container, Grid, Input, InputRange } from "shared/ui";
import { ChangeEvent, FC, FormEvent, useContext, useRef, useState } from "react";
import { BiCategory, BiFilter, BiRightArrowAlt, BiSearch, BiSquare } from "react-icons/bi";

const Filter: FC = observer(() => {
  const btnSize = 26;
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const {
    artistParam,
    uniqueArtists,
    techniqueParam,
    setSearchParam,
    filteredArtworks,
    uniqueTechniques,
    toggleArtistParam,
    toggleTechniqueParam,
  } = useContext(MobxContext) as IArtworkStore;


  const onClickTotalHandler = () => {
    const body = document.querySelector("body") as HTMLBodyElement;

    body.style.overflowY = "auto";

    toolsStore.toggleFilterOverlay();
  };

  const onClickScrollHandler = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    toolsStore.toggleFilterOverlay();

    !toolsStore.isFilter &&
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onClickIncreaseHandler = () => {
    toolsStore.increaseColumns();
  };

  const onClickDecreaseHandler = () => {
    toolsStore.decreaseColumns();
  };

  const onCheckArtistHandler = (item: IItem) => {
    return artistParam.includes(item.id);
  };

  const onSelectArtistHandler = (item: IItem) => {
    toggleArtistParam(item.id);
  };

  const onCheckTechniqueHandler = (item: IItem) => {
    return techniqueParam.includes(item.label);
  };

  const onSelectTechniqueHandler = (item: IItem) => {
    toggleTechniqueParam(item.label);
  };

  const onSubmitSearchArtwork = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParam(value);
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onChangeRangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    toolsStore.setColumns(value);
  };

  return (
    <>
      <Container>
        <div className={classNames("filter")} ref={ref}>
          <div className="filter__field">
            <form className="filter__form" onSubmit={onSubmitSearchArtwork}>
              <Input
                size={18}
                value={value}
                setValue={setValue}
                placeholder="Найти картину"
                onChange={onChangeInputHandler}
              />
              <Button type="submit" icon={<BiSearch size={btnSize} />} />
            </form>
          </div>
          <div className="filter__display">
            <Button
              className="filter__btn-decrease"
              onClick={onClickDecreaseHandler}
              icon={<BiSquare size={btnSize} />}
            />
            <InputRange
              min={1}
              max={6}
              value={toolsStore.columns}
              onChange={onChangeRangeHandler}
            />
            <Button
              className="filter__btn-increase"
              onClick={onClickIncreaseHandler}
              icon={<BiCategory size={btnSize} />}
            />
          </div>
          <div className="filter__expand">
            <Button
              justify="space-between"
              className="filter__btn"
              onClick={onClickScrollHandler}
              icon={<BiFilter size={btnSize} />}
            >
              Фильтр
            </Button>
          </div>
        </div>
      </Container>

      {toolsStore.isFilter &&
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
            justify="flex-end"
            iconPosition="after"
            onClick={onClickTotalHandler}
            className="filter__btn_total"
            icon={<BiRightArrowAlt size="40" color="white" />}
          >
            <span className="filter__label">результат </span>
            <span className="filter__label_total">{filteredArtworks.length}</span>
          </Button>
        </div>
      }
    </>
  );
});

export default Filter;