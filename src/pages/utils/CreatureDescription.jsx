import React, { useEffect, useState } from "react";
import styles from "./CreatureDescription.module.css";
import axios from "./../../utils/axios";
import { NavLink } from "react-router-dom";

const CreatureDescription = ({
  title,
  imgUrl,
  abilities,
  lvl,
  ab,
  locations,
}) => {
  const [location, setLocation] = useState([]);
  const [trigger, setTrigger] = useState(true);

  // Here we are downloading location title for every location that have our creature
  const fetchLocation = () => {
    locations.map(async (el) => {
      await axios.get(`/location/${el}`).then((result) => {
        const data = result.data.text[0];
        setLocation((arr) => [...arr, { id: el, title: data }]);
      });
      setTrigger(false);
    });
  };

  // Here we are providing launch of location info downloading, with some dependencies, so it will trigger only once
  useEffect(() => {
    if (trigger && locations?.length >= 1) {
      fetchLocation();
    }
  }, [locations]);

  return (
    <div className={styles.description__container}>
      <div className={styles.column_title__container}>
        <h2>{title}</h2>
      </div>
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
      <div className={styles.location_link__container}>
        {location?.map((el) => {
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
        })}
      </div>
    </div>
  );
};

export default CreatureDescription;
