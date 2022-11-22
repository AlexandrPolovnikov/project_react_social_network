import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.homeMenu}>
      <a href="#s">
        <h2>Home </h2>
      </a>
      <a href="#s">
        <h2>New message </h2>
      </a>
      <a href="#s">
        <h2>Feed </h2>
      </a>
      <a href="#s">
        <h2>Music</h2>
      </a>
      <a href="#s">
        <h2>Photo</h2>
      </a>
      <a href="#s">
        <h2>Settings</h2>
      </a>
    </div>
  );
};

export default Header;
