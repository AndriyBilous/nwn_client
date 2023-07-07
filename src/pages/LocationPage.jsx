import React from "react";
import styles from "./LocationPage.module.css";

export const LocationPage = () => {
  return (
    <div className={styles.location__container}>
      <div className={styles.location_props__container}>
        <div className={styles.location_image}>
          <img src="" alt="" />
        </div>
        <ul>
          <li>Property, here will be form from formik library</li>
        </ul>
      </div>
    </div>
  );
};
