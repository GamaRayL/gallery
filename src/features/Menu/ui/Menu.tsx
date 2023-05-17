import { BiSearch } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import store from "app/store";
import { Button, CustomLink, Input } from "shared/ui";
import { items } from "features/Menu/lib/items";
import { ChangeEvent, useState } from "react";

const Menu = observer(() => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };
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
          {/* <Button onClick={() => store.toggleOverlay()} icon={<BiSearch name="Search" size={20} />} /> */}
        </li>
      </ul>
      <Input size={24} value={value} setValue={setValue} onChange={onChangeHandler} />
    </nav >
  );
});

export default Menu;