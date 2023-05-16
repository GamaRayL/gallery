import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { items } from "features/Menu/lib/items";
import { Button, CustomLink } from "shared/ui";

const Menu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
          {/* {isActive && <Modal />} */}
          <Button onClick={() => setIsActive(!isActive)} icon={<BiSearch name="Search" size={20} />} />
        </li>
      </ul>
    </nav >
  );
};

export default Menu;