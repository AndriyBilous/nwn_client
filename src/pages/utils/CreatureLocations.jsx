import React, { useCallback, useEffect, useState } from "react";
import styles from "./CreatureLocations.module.css";
import axios from "./../../utils/axios";
import { NavLink } from "react-router-dom";

export const CreatureLocations = ({
  styleTrigger,
  firstAppearance,
  creatures,
  creatureLocationsShownID,
  fetchLocationTrigger,
  creatureLocationsTitle,
  creatureLocationsID,
  fetchLocation,
  setCreatureLocationsTitle,
}) => {
  // const [creatureLocationsID, setCreatureLocationsID] = useState([]);
  // const [creatureLocationsTitle, setCreatureLocationsTitle] = useState([]);

  // useEffect(() => {
  //   if (creatureLocationsShownID !== "") {
  //     const locations = creatures
  //       .filter((el) => el._id === creatureLocationsShownID)
  //       .map((el) => el.location);
  //     // console.log(locations);
  //     setCreatureLocationsID(...locations);
  //   } else {
  //     setCreatureLocationsID([]);
  //   }
  // }, [creatureLocationsShownID]);

  // // console.log(creatureLocationsID);

  // const fetchLocation = useCallback(
  //   async (locationID) => {
  //     const { data } = await axios.get(`/location/${locationID}`);
  //     setCreatureLocationsTitle((arr) => [...arr, data]);
  //   },
  //   [creatureLocationsID]
  // );

  // useEffect(() => {
  //   console.log(
  //     "fetchLocationTrigger: " +
  //       fetchLocationTrigger +
  //       " creatureLocationsShownID: " +
  //       creatureLocationsShownID
  //   );
  //   if (
  //     fetchLocationTrigger !== "" &&
  //     fetchLocationTrigger === creatureLocationsShownID
  //   ) {
  //     creatureLocationsID.map((el) => fetchLocation(el));
  //     console.log(creatureLocationsID);
  //   }
  // }, [creatureLocationsShownID, fetchLocationTrigger]);

  // ------------------------------------

  // const findLocationsTitle = () => {
  //   setCreatureLocationsTitle([]);
  //   creatureLocationsID.map((el) => fetchLocation(el));
  //   console.log(creatureLocationsTitle);
  // };

  // useEffect(() => {
  //   findLocationsTitle();
  // }, [creatureLocationsID]);

  if (firstAppearance) {
    return <div className={styles.main__container}></div>;
  }
  return (
    <div
      className={
        styleTrigger
          ? styles.main__container + " " + styles.main__container_hide
          : styles.main__container + " " + styles.main__container_show
      }
    >
      {/* {styleTrigger ? "True" : "False"} */}
      {creatureLocationsTitle.map((location) => {
        return (
          <NavLink
            to={`/location/${location._id}`}
            key={location._id}
            className={styles.location__container}
          >
            <p>{location.text}</p>
          </NavLink>
        );
      })}
    </div>
  );
};
