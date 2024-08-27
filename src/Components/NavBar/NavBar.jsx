import React, { useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import "./NavBar.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = ({ titleLogo, menu, theme, setTheme }) => {
  const [navItemM, setNavItemM] = useState(false);
  const [navThem, setNavThem] = useState(theme === "dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setNavThem((prevNavThem) => !prevNavThem);
  };

  return (
    <>
      <nav>
        <h1>{titleLogo}</h1>
        <ul>
          {menu.map((element, index) => {
            return (
              <li key={index}>
                <Link
                  to={element.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {element.titleName}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="DarkLight" onClick={toggleTheme}>
          <IoMoonSharp style={{ display: navThem ? "none" : "block" }} />
          <IoSunny style={{ display: navThem ? "block" : "none" }} />
        </button>
        <button className="barsMenu" onClick={() => setNavItemM((prevNavItemM) => !prevNavItemM)}>
          <HiMenuAlt3 style={{ display: navItemM ? "none" : "block" }} />
          <HiOutlineXMark style={{ display: navItemM ? "block" : "none" }} />
        </button>
      </nav>
      <div className={`GNavBtn ${navItemM ? "active1" : ""}`}>
        <ul>
          {menu.map((element, index) => {
            return (
              <li key={index}>
                <Link
                  to={element.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {element.titleName}
                </Link>
              </li>
            );
          })}
        </ul>
        <button onClick={toggleTheme}>
          <IoMoonSharp style={{ display: navThem ? "none" : "block" }} />
          <IoSunny style={{ display: navThem ? "block" : "none" }} />
        </button>
      </div>
    </>
  );
};

export default NavBar;