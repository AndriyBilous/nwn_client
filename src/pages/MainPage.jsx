import React from "react";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.greet__container}>
        <h1>Welcome</h1>
        <h2>
          This site was created on react library as a presentation of some web
          development skills. Information for this site comes from "Siala realm"
          in nwn game.
        </h2>
        <p>
          Here you can look for a map structure, shown on one kingdom territory,
          including creatures bestiary on this locations.
        </p>
      </div>
    </div>
  );
};
