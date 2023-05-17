import { BiSearch } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import store from "app/store";
import { Button, CustomLink } from "shared/ui";
import { items } from "features/Menu/lib/items";

const Menu = observer(() => {
  console.log(store.isSearch);
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
          <Button onClick={() => store.toggleOverlay()} icon={<BiSearch name="Search" size={20} />} />
        </li>
      </ul>
    </nav >
  );
});

export default Menu;