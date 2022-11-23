import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => (
  <>
    <div className={style.homeMenu}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Postsss</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </li>
      </ul>
    </div>
    <Outlet />
  </>
);

export { Header };
