import React from "react";
import styles from "./CreatureLocations.module.css";
import { NavLink } from "react-router-dom";

export const CreatureLocations = ({
  styleTrigger,
  firstAppearance,
  creatureLocationsTitle,
}) => {
  if (firstAppearance) {
    return <div className={styles.main__container}></div>;
  }
  return (
    <div
      className={
        styleTrigger
          ? styles.main__container + " " + styles.main__container_hide
          : styles.main__container + " " + styles.main__container_show
      }
    >
      {creatureLocationsTitle.map((location) => {
        return (
          <NavLink
            to={`/location/${location._id}`}
            key={location._id}
            className={styles.location__container}
          >
            <p>{location.text}</p>
          </NavLink>
        );
      })}
    </div>
  );
};
