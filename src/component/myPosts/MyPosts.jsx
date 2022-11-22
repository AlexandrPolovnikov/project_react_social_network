import React from "react";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  return (
    <div className={style.container}>
      <div className={style.bg}>
        <h3>User Name</h3>
      </div>
      <div className={style.post}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default MyPosts;
