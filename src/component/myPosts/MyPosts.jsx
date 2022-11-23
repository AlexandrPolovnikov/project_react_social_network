import React from "react";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  return (
    <div className={style.container}>
      <div className={style.bg}>
        <h3>User Name</h3>
      </div>
      <div className={style.post}>
        <p>
          {props.message}
          <h3>
            Мы стали забывать, что настоящее русское айти - это кодирование от
            алкоголизма
          </h3>
        </p>
      </div>
    </div>
  );
};

export default MyPosts;
