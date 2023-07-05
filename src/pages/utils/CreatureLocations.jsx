import React from "react";
import style from "./CreatureLocations.module.css";

export const CreatureLocations = ({ styleTrigger, firstAppearance }) => {
  if (firstAppearance) {
    return <div className={style.main__container}></div>;
  }
  return (
    <div
      className={
        styleTrigger
          ? style.main__container + " " + style.main__container_hide
          : style.main__container + " " + style.main__container_show
      }
    >
      {styleTrigger ? "True" : "False"}
    </div>
  );
};
