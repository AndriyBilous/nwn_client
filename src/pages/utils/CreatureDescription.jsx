import React from "react";
import styles from "./CreatureDescription.module.css";
import { NavLink } from "react-router-dom";
import Preloader from "./Preloader/Preloader";

const CreatureDescription = ({
  title,
  imgUrl,
  abilities,
  lvl,
  ab,
  location,
}) => {
  return (
    <div className={styles.description__container}>
      <div className={styles.column_title__container}>
        <h2>{title}</h2>
      </div>
      <div className={styles.column_info__container}>
        <div className={styles.column_lvl__container}>
          <div>
            <h3>lvl</h3>
          </div>
          <div>
            <p>{lvl ? lvl : "-"}</p>
          </div>
        </div>
        <div className={styles.column_ab__container}>
          <div>
            <h3>ab</h3>
          </div>
          <div>
            <p>{ab ? ab + " +1d20" : "-"}</p>
          </div>
        </div>
        <div className={styles.column_abilities__container}>
          <div className={styles.column_abilities__label__container}>
            <h3 className={styles.column_abilities__label}>abilities</h3>
          </div>
          <div className={styles.column_abilities__text__container}>
            <p className={styles.column_abilities__text}>
              {abilities ? abilities : "-"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.location_link__container}>
        {location.length >= 1 ? (
          location.map((el) => {
            return (
              <NavLink
                key={el.id}
                to={`/location/${el.id}`}
                className={styles.location_link}
              >
                <div>
                  <p>{el.title}</p>
                </div>
              </NavLink>
            );
          })
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default CreatureDescription;
