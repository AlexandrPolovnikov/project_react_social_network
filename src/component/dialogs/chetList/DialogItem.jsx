import React from "react";
import sl from "../Dialogs.module.css";

const DialogItem = (props) => {
  return <div className={sl.icon}>{props.dialogs}</div>;
};

export default DialogItem;
