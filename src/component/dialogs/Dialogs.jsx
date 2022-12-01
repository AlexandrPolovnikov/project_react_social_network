import React from "react";
import { NavLink, Outlet, Route, Routes, useParams } from "react-router-dom";
import sl from "./Dialogs.module.css";
import Chat1 from "./chetList/Chat1";
import Chat2 from "./chetList/Chat2";
import Chat3 from "./chetList/Chat3";

const Dialogs = (props) => {
  const { id } = useParams();
  return (
    <div className={sl.container}>
      <div className={sl.tagname}>
        <li className={sl.icon}>
          <NavLink to="1">Дмитрий</NavLink>
        </li>
        <li className={sl.icon}>
          <NavLink to="2">Екатерина</NavLink>
        </li>
        <li className={sl.icon}>
          <NavLink to="3">Татьяна</NavLink>
        </li>
      </div>
      <div className={sl.line}></div>
      <div className={sl.chat}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dialogs;
