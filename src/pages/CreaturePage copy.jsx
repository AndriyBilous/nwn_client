import React, { useCallback, useEffect, useState } from "react";
import styles from "./CreaturePage.module.css";
import CreatureDescription from "./utils/CreatureDescription.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const CreaturePage = () => {
  const [creature, setCreature] = useState("");
  const [location, setLocation] = useState([]);
  const [trigger, setTrigger] = useState(true);

  const params = useParams();

  const loc = useSelector((state) => state.location);
  const cre = useSelector((state) => state.creature);

  // Here we are downloading data of creature, that we will display
  const fetchCreature = useCallback(async () => {
    const data = cre.creatures.filter((el) => el._id === params.id);
    setCreature(...data);
  }, [cre.creatures, params.id]);

  // Here we are launching function one time (with first creating of this component)
  useEffect(() => {
    if (creature === "" && cre.loaded) {
      fetchCreature();
    }
  }, [creature, cre.loaded, fetchCreature]);

  // Here we are downloading location title for every location that have our creature
  const fetchLocation = useCallback(() => {
    creature.location.map(async (locationID) => {
      const data = loc.locations.filter((el) => el._id === locationID);
      const locationTitle = data[0].text[0];

      setLocation((arr) => [...arr, { id: locationID, title: locationTitle }]);
      setTrigger(false);
    });
  }, [creature.location, loc.locations]);

  // Here we are providing launch of location info downloading, with some dependencies, so it will trigger only once
  useEffect(() => {
    if (trigger && creature.location?.length >= 1 && loc.loaded === true) {
      fetchLocation();
    }
  }, [creature.location, loc, fetchLocation, trigger]);

  return (
    <div className={styles.creature__container}>
      <div className={styles.creature_props__container}>
        <div className={styles.creature_image__container}>
          {creature?.imgUrl && (
            <img
              src={`https://nwn-server.onrender.com/creatures/${creature.imgUrl}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://nwn-server.onrender.com/forest_01.jpg";
              }}
              alt="creatureIMG"
              className={styles.creature_image}
            ></img>
          )}
        </div>
        <CreatureDescription
          title={creature.title}
          imgUrl={creature.imgUrl}
          abilities={creature.abilities}
          lvl={creature.lvl}
          ab={creature.ab}
          location={location}
        />
      </div>
    </div>
  );
};
