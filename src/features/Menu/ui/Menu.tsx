import { BiSearch } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import { Button, CustomLink } from "shared/ui";
import { items } from "features/Menu/lib/items";
import store from "store";

const Menu = observer(() => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {items.map((item) => (
          <li key={item.id} className="nav__item">
            <CustomLink
              label={item.label}
              pathname={item.pathname}
            />
          </li>
        ))}
        <li className="nav__item">
          <Button
            icon={<BiSearch name="Search" size={20} />}
            onClick={() => store.toggleSearchOverlay()}
          />
        </li>
      </ul>
    </nav >
  );
});

export default Menu;