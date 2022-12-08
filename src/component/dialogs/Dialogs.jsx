import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DialogItem from "./chetList/DialogItem";
import sl from "./Dialogs.module.css";

const Dialogs = (state) => {
  console.log(state);

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
        <li className={sl.icon}>
          <DialogItem />
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
