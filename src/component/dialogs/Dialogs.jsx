import React from "react";
import { NavLink, Outlet, Route, Routes, useParams } from "react-router-dom";
import sl from "./Dialogs.module.css";
import Chat1 from "./chetList/Chat1";
import Chat2 from "./chetList/Chat2";
import Chat3 from "./chetList/Chat3";

const Dialogs = () => {
  const { id } = useParams();
  return (
    <div className={sl.container}>
      <div className={sl.tagname}>
        <li>
          <NavLink to="id" className={sl.icon}>
            Дмитрий
          </NavLink>
        </li>
        <li>
          <NavLink to="2" className={sl.icon}>
            Екатерина
          </NavLink>
        </li>
        <li>
          <NavLink to="3" className={sl.icon}>
            Татьяна
          </NavLink>
        </li>
        <Outlet />
      </div>
      <div className={sl.chat}>
        <Routes>
          <Route path="dialogs" element={<Dialogs />}>
            <Route path="dialogs/1" element={<Chat1 />} />
            <Route path="dialogs/2" element={<Chat2 />} />
            <Route path="dialogs/3" element={<Chat3 />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dialogs;
