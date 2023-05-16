import { items } from "features/Menu/lib/items";
import { BiSearch } from "react-icons/bi";
import { Button, CustomLink } from "shared/ui";

const Menu = () => {
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
          <Button icon={<BiSearch name="Search" size={20} />} />
        </li>
      </ul>
    </nav >
  );
};

export default Menu;