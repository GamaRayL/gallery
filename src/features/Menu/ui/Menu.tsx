import Link from "next/link";
import { Montserrat } from 'next/font/google';
import { BiSearch } from "react-icons/bi";
import { Button } from "shared/ui";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            className={`nav__link ${montserrat.className}`}
            href={"/"}
          >
            <span className="nav__text">Главная</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className={`nav__link ${montserrat.className}`}
            href={"/"}
          >
            <span className="nav__text">Коллекция</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className={`nav__link ${montserrat.className}`}
            href={"/"}
          >
            <span className="nav__text">Виртуал тур</span>
          </Link>
        </li>
        <li className="nav__item">
          <Button icon={<BiSearch name="Search" size={20} />} />
        </li>
      </ul>
    </nav >
  );
};

export default Menu;