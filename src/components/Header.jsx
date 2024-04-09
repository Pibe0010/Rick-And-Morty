import "./Header.css";
import logo from "../assets/58f37720a4fa116215a9240f.png";
import { useState } from "react";
import { NavLinks } from "./NavLinks.jsx";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuToggle = () => {
    setMenuOpen((old) => !old);
  };

  const isMenu = menuOpen ? "openMenu" : "";
  const addClassMenu = menuOpen ? "visible" : "";

  return (
    <header className="header-container">
      <img className="logo" src={logo} alt="Logo Rick And Morty" />
      <label className="hamburger">
        <input
          type="checkbox"
          className={`closeMenu ${isMenu}`}
          onClick={openMenuToggle}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      <nav className={`nav ${addClassMenu}`}>
        <ul className="navList">
          <NavLinks
            className="link"
            name="Home"
            url="/"
            menuClose={openMenuToggle}
          />
          <NavLinks
            className="link"
            name="Epìsode"
            url="/episode"
            menuClose={openMenuToggle}
          />
        </ul>
      </nav>
    </header>
  );
};
