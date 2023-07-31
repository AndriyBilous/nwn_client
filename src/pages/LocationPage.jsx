import React, { useCallback, useEffect, useState } from "react";
import styles from "./LocationPage.module.css";
import axios from "./../utils/axios";
import { useParams, NavLink } from "react-router-dom";

export const LocationPage = () => {
  const [location, setLocation] = useState("");
  const [creatures, setCreatures] = useState([]);
  const [makeCreatureSearch, setMakeCreatureSearch] = useState(true);

  const params = useParams();

  const fetchLocation = useCallback(async () => {
    const { data } = await axios.get(`/location/${params.id}`);
    setLocation(data);
  }, [params.id, setLocation]);

  const fetchCreature = useCallback(
    async (objectID) => {
      const { data } = await axios.get(`/creature/${objectID}`);
      setCreatures((arr) => [...arr, data]);
    },
    [location]
  );

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

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

  // console.log(location.imgUrl);

  return (
    <div className={styles.location__container}>
      <div className={styles.location_props__container}>
        <div className={styles.location_image}>
          {location?.imgUrl && (
            <img
              src={`http://localhost:3002/${location.imgUrl}`}
              alt="locationIMG"
            ></img>
          )}
        </div>
        <div className={styles.location_description}>
          <h2>{location.text}</h2>
          <h3>Available creatures:</h3>
          {creatures.length === 0 && <div>Here have to be creatures</div>}
          {creatures.length >= 1 &&
            creatures.map((el) => (
              <div className={styles.creature__container}>
                <NavLink
                  to={`/creature/${el._id}`}
                  key={el._id}
                  className={styles.creature_title__container}
                >
                  <p>{el.title}</p>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
