import React, { useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

const NavBar = ({ titleLogo, menu }) => {
  const [navItemM, setNavItemM] = useState(false);
  return (
    <>
      <nav>
        <h1>{titleLogo}</h1>
        <ul>
          {menu.map((element, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={element.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {element.titleName}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="DarkLight">
          <IoMoonSharp />
          <IoSunny />
        </button>
        <button className="barsMenu" onClick={() => setNavItemM(!navItemM)}>
          <HiMenuAlt3 style={{ display: navItemM ? "none" : "block" }} />
          <HiOutlineXMark style={{ display: navItemM ? "block" : "none" }} />
        </button>
      </nav>
      <div className={`GNavBtn ${navItemM ? "active1" : ""}`}>
        <ul>
          {menu.map((element, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={element.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {element.titleName}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button>
          <IoMoonSharp />
          <IoSunny />
        </button>
      </div>
    </>
  );
};

export default NavBar;
