import React from "react";
import styles from "./CreatureList.module.css";
import { NavLink } from "react-router-dom";

export const CreatureList = ({
  styleTrigger,
  setStyleTrigger,
  firstAppearance,
  setFirstAppearance,
  creatures,
  creatureLocationsShownID,
  setCreatureLocationsShownID,
  setFetchLocationTrigger,
  setCreatureLocationsID,
  fetchLocation,
  creatureLocationsID,
  creatureLocationsTitle,
}) => {
  const findLocationsID = async (id) => {
    const [locations] = creatures
      .filter((el) => el._id === id)
      .map((el) => el.location);
    // console.log(locations);
    // setCreatureLocationsID(...locations);
    await locations.map((el) => fetchLocation(el));
  };

  const findLocationsTitle = () => {
    creatureLocationsID.map((el) => fetchLocation(el));
    console.log(creatureLocationsTitle);
  };

  const handleOnClick = (e) => {
    if (creatureLocationsShownID === "") {
      setCreatureLocationsShownID(e.currentTarget.value);
      setStyleTrigger();
      setFetchLocationTrigger(e.currentTarget.value);
      findLocationsID(e.currentTarget.value);
    } else if (
      creatureLocationsShownID !== "" &&
      creatureLocationsShownID !== e.currentTarget.value
    ) {
      findLocationsID(e.currentTarget.value);
      setCreatureLocationsShownID(e.currentTarget.value);
      setFetchLocationTrigger(e.currentTarget.value);
    } else {
      setCreatureLocationsID([]);
      setCreatureLocationsShownID("");
      setStyleTrigger();
      setFetchLocationTrigger("");
    }

    if (firstAppearance) {
      setFirstAppearance();
    }
  };
  // console.log(creatureLocationsShownID);

  if (firstAppearance) {
    return (
      <div className={styles.main__container + " " + styles.absolute}>
        <div>
          {creatures.map((creature) => {
            return (
              <div
                className={styles.creature_element__container}
                key={creature._id}
              >
                <NavLink
                  to={`/creature/${creature._id}`}
                  className={styles.creature_element_title}
                >
                  <p>{creature.title}</p>
                </NavLink>
                <button
                  onClick={handleOnClick}
                  className={styles.creature_element__button}
                  value={creature._id}
                >
                  {creatureLocationsShownID === creature._id
                    ? "Hide Description"
                    : "Show Description"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        styleTrigger
          ? styles.main__container + " " + styles.relative_left
          : styles.main__container + " " + styles.relative_center
      }
    >
      {creatures.map((creature) => {
        return (
          <div
            className={styles.creature_element__container}
            key={creature._id}
          >
            <NavLink
              to={`/creature/${creature._id}`}
              className={styles.creature_element_title}
            >
              <p>{creature.title}</p>
            </NavLink>
            <button
              onClick={handleOnClick}
              className={styles.creature_element__button}
              value={creature._id}
            >
              {creatureLocationsShownID === creature._id
                ? "Hide Description"
                : "Show Description"}

              {/* {styleTrigger ? "Show Description" : "Hide Description"} */}
            </button>
          </div>
        );
      })}
    </div>
  );
};
