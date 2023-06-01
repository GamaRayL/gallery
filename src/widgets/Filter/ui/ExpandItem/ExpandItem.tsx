import { motion } from "framer-motion";
import { FC, useState } from "react";
import { BiCaretDown, BiChevronDown, BiChevronUp, BiChevronsDown, BiDownArrow, BiSortDown, BiUpArrow, BiUpsideDown } from "react-icons/bi";
import { Button, Checkbox } from "shared/ui";
import { IExpandItem } from "widgets/Filter/lib/types";

const ExpandItem: FC<IExpandItem> = ({ items, title, onChecked, onClick }) => {
  const [isShow, setShow] = useState(false);
  const [isShowAll, setShowAll] = useState(false);

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
        {title}
        <span className="expand__count">{items.length}</span>
      </Button>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: .8,
        }}
      >
        {items
          .slice(0, isShowAll ? -1 : 4)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name, count }) => (
            <Checkbox
              key={id || name}
              className="expand__checkbox"
              label={name}
              count={count}
              checked={onChecked(id, name)}
              onClick={() => onClick(id, name)}
            />
          ))
        }
        <Button
          className="expand__btn-showAll"
          icon={isShowAll ? <BiChevronUp size={28} /> : <BiChevronDown size={28} />}
          onClick={() => setShowAll(!isShowAll)}
        >
          Показать все
        </Button>
      </motion.div>
    </div>
  );
};

export default ExpandItem;