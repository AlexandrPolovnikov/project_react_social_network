import React from "react";
import sl from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={sl.container}>
      <div className={sl.tagname}>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>6</h1>
      </div>
      <div className={sl.chat}></div>
    </div>
  );
};

export default Dialogs;
