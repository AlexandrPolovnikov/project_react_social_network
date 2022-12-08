import React from "react";
import cl from "./HomePage.module.css";

const Border = () => {
  return (
    <div className={cl.border}>
      <div className={cl.fonscreen}>
        <div className={cl.icon}></div>
      </div>
      <div className={cl.info}>
        <h1>User Name</h1>
        <div className={cl.buttons}>
          <button>Редактировать профиль</button> <button>Еще</button>
        </div>
        <div className={cl.intro}>
          <h3>Информация:</h3>

          <h3>Город: Санкт-Петербург</h3>
          <h3>Дата рождения</h3>
        </div>
      </div>
    </div>
  );
};

export default Border;
