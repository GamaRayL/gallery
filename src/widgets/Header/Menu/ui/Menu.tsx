import classNames from "classnames";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import toolsStore from "store/ToolsStore";
import { observer } from "mobx-react-lite";
import { RiCloseLine } from "react-icons/ri";
import { Button, CustomLink } from "shared/ui";
import { BiListUl, BiSearch } from "react-icons/bi";
import { items } from "widgets/Header/Menu/lib/items";

const Menu: FC = observer(() => {
  const { pathname } = useRouter();
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
            onClick={() => setShow(!isShow)}
            icon={isShow ? <RiCloseLine size={24} /> : <BiListUl size={24} />}
          />
          <ul className={classNames("nav__menu", {
            "nav__menu_active": isShow,
            "nav__menu_art": pathname == "/collection/[id]"
          })}>
            {items.map((item) => (
              <li key={item.id} >
                <CustomLink
                  label={item.label}
                  className="nav__link"
                  pathname={item.pathname}
                  onClick={onClickShowHanlder}
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
    </nav>
  );
});

export default Menu;