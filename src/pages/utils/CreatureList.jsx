import React from "react";
import style from "./CreatureList.module.css";

export const CreatureList = ({
  styleTrigger,
  setStyleTrigger,
  firstAppearance,
  setFirstAppearance,
}) => {
  const handleOnClick = (e) => {
    setStyleTrigger();
    if (firstAppearance) {
      setFirstAppearance();
    }
  };

  if (firstAppearance) {
    return (
      <div className={style.main__container + " " + style.absolute}>
        <div>
          <button onClick={handleOnClick}>Show Locations</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        styleTrigger
          ? style.main__container + " " + style.relative_left
          : style.main__container + " " + style.relative_center
      }
    >
      <div>
        <ul>
          <li>
            Some creature 1{" "}
            <button onClick={handleOnClick}>
              {styleTrigger ? "Show Locations" : "Hide Locations"}
            </button>
          </li>
          <li>
            Some creature 2{" "}
            <button onClick={handleOnClick}>
              {styleTrigger ? "Show Locations" : "Hide Locations"}
            </button>
          </li>
          <li>
            Some creature 3{" "}
            <button onClick={handleOnClick}>
              {styleTrigger ? "Show Locations" : "Hide Locations"}
            </button>
          </li>
          <li>
            Some creature 4{" "}
            <button onClick={handleOnClick}>
              {styleTrigger ? "Show Locations" : "Hide Locations"}
            </button>
          </li>
          <li>
            Some creature 5{" "}
            <button onClick={handleOnClick}>
              {styleTrigger ? "Show Locations" : "Hide Locations"}
            </button>
          </li>
          <li>
            Some creature 6{" "}
            <button onClick={handleOnClick}>
              {styleTrigger ? "Show Locations" : "Hide Locations"}
            </button>
          </li>
          <li>
            Some creature 7{" "}
            <button onClick={handleOnClick}>
              {styleTrigger ? "Show Locations" : "Hide Locations"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
