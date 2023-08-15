import React, { useCallback, useEffect, useState } from "react";
import styles from "./CreaturesPage.module.css";
import { CreatureList } from "./utils/CreatureList";
import { CreatureLocations } from "./utils/CreatureLocations";
import { useDispatch, useSelector } from "react-redux";
import { getAllCreatures } from "../redux/features/creatureSlice";
import axios from "../utils/axios";

export const CreaturesPage = () => {
  const dispatch = useDispatch();
  const [locationsTrigger, setLocationsTrigger] = useState(true);
  const [firstAppearance, setFirstAppearance] = useState(true);
  const [creatureLocationsShownID, setCreatureLocationsShownID] = useState("");
  const [fetchLocationTrigger, setFetchLocationTrigger] = useState(true);

  const { creatures } = useSelector((state) => state.creature);
  const state = useSelector((state) => state);
  // console.log(state);

  useEffect(() => {
    dispatch(getAllCreatures());
  }, [dispatch]);

  const handleChangeFirstAppearance = () => {
    if (setFirstAppearance) {
      setFirstAppearance(false);
    }
  };

  const handleChangeLocationsTrigger = () => {
    setLocationsTrigger(!locationsTrigger);
  };

  const [creatureLocationsID, setCreatureLocationsID] = useState([]);
  const [creatureLocationsTitle, setCreatureLocationsTitle] = useState([]);

  // console.log(creatureLocationsID);

  const fetchLocation = useCallback(
    async (locationID) => {
      setCreatureLocationsTitle([]);
      const { data } = await axios.get(`/location/${locationID}`);
      setCreatureLocationsTitle((arr) => [...arr, data]);
    },
    [creatureLocationsID]
  );
  console.log(creatureLocationsTitle);

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
        setCreatureLocationsID={setCreatureLocationsID}
        fetchLocation={fetchLocation}
        creatureLocationsID={creatureLocationsID}
        creatureLocationsTitle={creatureLocationsTitle}
      />
      <CreatureLocations
        styleTrigger={locationsTrigger}
        firstAppearance={firstAppearance}
        creatureLocationsShownID={creatureLocationsShownID}
        creatures={creatures}
        fetchLocationTrigger={fetchLocationTrigger}
        creatureLocationsTitle={creatureLocationsTitle}
        creatureLocationsID={creatureLocationsID}
        fetchLocation={fetchLocation}
        setCreatureLocationsTitle={setCreatureLocationsTitle}
      />
    </div>
  );
};
