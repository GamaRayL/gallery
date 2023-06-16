import { motion } from "framer-motion";
import { FC, useState, MouseEvent } from "react";
import { BiChevronDown, BiChevronUp, BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Button, Checkbox } from "shared/ui";
import { expandVariants } from "widgets/Filter/ExpandItem/lib/utils";
import { IExpandItem } from "widgets/Filter/lib/types";

const ExpandItem: FC<IExpandItem> = ({ items, title, onCheck, onClick }) => {
  const [isShow, setShow] = useState(false);
  const [isShowAll, setShowAll] = useState(false);

  const onClickExpandHandler = (event: MouseEvent) => {
    const div = event.currentTarget?.closest("div")?.children[1] as HTMLElement;

    if (div?.style.display === "none") {
      div.style.display = "block";
      setShow(false);
    } else {
      div.style.display = "none";
      setShow(true);
    }
  };

  return (
    <div className="expand">
      <Button
        className="expand__btn"
        justify="space-between"
        onClick={onClickExpandHandler}
        icon={isShow ? <BiUpArrow size={22} /> : <BiDownArrow size={22} />}
      >
        {title}
        <span className="expand__count">{items.length}</span>
      </Button>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={expandVariants}
      >
        {items
          .slice(0, isShowAll ? -1 : 4)
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((item) => (
            <Checkbox
              {...item}
              key={item.id}
              className="expand__checkbox"
              checked={onCheck && onCheck(item)}
              onClick={onClick && (() => onClick(item))}
            />
          ))
        }
        <Button
          className="expand__btn-showAll"
          onClick={() => setShowAll(!isShowAll)}
          icon={isShowAll ? <BiChevronUp size={28} /> : <BiChevronDown size={28} />}
        >
          Показать все
        </Button>
      </motion.div>
    </div>
  );
};

export default ExpandItem;