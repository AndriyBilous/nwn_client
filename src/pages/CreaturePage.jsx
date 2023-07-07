import React from "react";
import styles from "./CreaturePage.module.css";
import CreatureDescription from "./utils/CreatureDescription.jsx";

export const CreaturePage = () => {
  return (
    <div className={styles.creature__container}>
      <div className={styles.creature_props__container}>
        <div className={styles.creature_image}>
          <img src="" alt="" />
        </div>
        <CreatureDescription />
      </div>
    </div>
  );
};
