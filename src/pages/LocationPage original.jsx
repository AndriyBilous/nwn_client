import React, { useCallback, useEffect, useState } from "react";
import styles from "./LocationPage.module.css";
import axios from "../utils/axios";
import { useParams, NavLink } from "react-router-dom";

export const LocationPage = () => {
  const [location, setLocation] = useState("");
  const [creatures, setCreatures] = useState([]);
  const [makeCreatureSearch, setMakeCreatureSearch] = useState(true);

  const params = useParams();

  // Here we are downloading data of location, that we are displaying
  const fetchLocation = useCallback(async () => {
    const { data } = await axios.get(`/location/${params.id}`);
    setLocation(data);
  }, [params.id, setLocation]);

  // Here we are downloading data of creatures, that our location have
  const fetchCreature = useCallback(
    async (objectID) => {
      const { data } = await axios.get(`/creature/${objectID}`);
      setCreatures((arr) => [...arr, data]);
    },
    [location]
  );

  // Here we are launching location data downloading
  useEffect(() => {
    if (location === "") {
      fetchLocation();
    }
  }, []);

  // Here we are launching creatures data downloading
  useEffect(() => {
    if (
      location.creatures &&
      location.creatures.length >= 1 &&
      makeCreatureSearch
    ) {
      setMakeCreatureSearch(!makeCreatureSearch);
      location.creatures.map((value) => {
        fetchCreature(value);
      });
    }
  }, [location, fetchCreature]);

  return (
    <div className={styles.location__container}>
      <div className={styles.location_props__container}>
        <div className={styles.location_image}>
          {location?.imgUrl && (
            <img
              src={`http://localhost:3002/${location.imgUrl}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "http://localhost:3002/forest_01.jpg";
              }}
              alt="locationIMG"
              className={styles.location_image}
            ></img>
          )}
        </div>
        <div className={styles.location_description}>
          <h2 className={styles.location_description__title}>
            {location.text}
          </h2>
          <h3 className={styles.location_description__label}>
            Available creatures:
          </h3>
          {creatures.length === 0 && <div>Here have to be creatures</div>}
          {creatures.length >= 1 &&
            creatures.map((el) => (
              <div className={styles.creature__container} key={el._id}>
                <NavLink
                  to={`/creature/${el._id}`}
                  className={styles.creature_title__container}
                >
                  <p className={styles.creature_title__text}>{el.title}</p>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
