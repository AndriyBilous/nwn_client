import React, { useCallback, useEffect, useState } from "react";
import styles from "./CreaturesPage.module.css";
import { CreatureList } from "./utils/CreatureList";
import { CreatureLocations } from "./utils/CreatureLocations";
import { useSelector } from "react-redux";

import axios from "../utils/axios";

export const CreaturesPage = () => {
  const [locationsTrigger, setLocationsTrigger] = useState(true);
  const [firstAppearance, setFirstAppearance] = useState(true);
  const [creatureLocationsShownID, setCreatureLocationsShownID] = useState("");
  const [fetchLocationTrigger, setFetchLocationTrigger] = useState(true);
  const [creatures, setCreatures] = useState([]);

  const creatureDB = useSelector((state) => state.creature);

  useEffect(() => {
    if (creatureDB.loaded === true) {
      setCreatures(creatureDB.creatures);
    }
  }, [creatureDB.loaded, creatureDB.creatures]);

  const [creatureLocationsTitle, setCreatureLocationsTitle] = useState([]);

  // Here we have trigger for first opening of the page (we need it to know what content to display)
  const handleChangeFirstAppearance = () => {
    if (setFirstAppearance) {
      setFirstAppearance(false);
    }
  };

  // Here we have trigger for CreatureLocations visibility
  const handleChangeLocationsTrigger = () => {
    setLocationsTrigger(!locationsTrigger);
  };

  // Here we are downloading locations data
  const fetchLocation = useCallback(async (locationID) => {
    setCreatureLocationsTitle([]);
    const { data } = await axios.get(`/location/${locationID}`);
    setCreatureLocationsTitle((arr) => [...arr, data]);
  }, []);

  return (
    <div className={styles.creatures__container}>
      <CreatureList
        creatures={creatures}
        styleTrigger={locationsTrigger}
        setStyleTrigger={handleChangeLocationsTrigger}
        firstAppearance={firstAppearance}
        setFirstAppearance={handleChangeFirstAppearance}
        creatureLocationsShownID={creatureLocationsShownID}
        setCreatureLocationsShownID={setCreatureLocationsShownID}
        fetchLocationTrigger={fetchLocationTrigger}
        setFetchLocationTrigger={setFetchLocationTrigger}
        fetchLocation={fetchLocation}
        creatureDBLoaded={creatureDB.loaded}
      />
      <CreatureLocations
        styleTrigger={locationsTrigger}
        firstAppearance={firstAppearance}
        creatureLocationsTitle={creatureLocationsTitle}
      />
    </div>
  );
};
