import { observer } from "mobx-react-lite";
import { BiListUl, BiSearch } from "react-icons/bi";
import toolsStore from "store/toolsStore";
import { Button, CustomLink } from "shared/ui";
import { FC, useState } from "react";
import { items } from "widgets/Header/Menu/lib/items";
import classNames from "classnames";
import { RiCloseLine } from "react-icons/ri";

const Menu: FC = observer(() => {
  const [isShow, setShow] = useState(false);

  const onClickShowHanlder = () => {
    setShow(!isShow);
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Button
            className="nav__btn-list"
            icon={isShow ? <RiCloseLine size={24} /> : <BiListUl size={24} />}
            onClick={() => setShow(!isShow)}
          />
          <ul className={classNames("nav__menu", {
            "nav__menu_active": isShow,
          })}>
            {items.map((item) => (
              <li key={item.id} >
                <CustomLink
                  onClick={onClickShowHanlder}
                  className="nav__link"
                  label={item.label}
                  pathname={item.pathname}
                  disabled={item.pathname == "-"}
                />
              </li>
            ))}
          </ul>
        </li>
        <li className="nav__item">
          <Button
            icon={<BiSearch name="Search" size={20} />}
            onClick={() => toolsStore.toggleSearchOverlay()}
          />
        </li>
      </ul>
    </nav >
  );
});

export default Menu;