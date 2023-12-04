import React from "react";
import styles from "./CreatureList.module.css";
import { NavLink } from "react-router-dom";
import Preloader from "./Preloader/Preloader";

export const CreatureList = ({
  styleTrigger,
  setStyleTrigger,
  firstAppearance,
  setFirstAppearance,
  creatures,
  creatureLocationsShownID,
  setCreatureLocationsShownID,
  setFetchLocationTrigger,
  fetchLocation,
  creatureDBLoaded,
}) => {
  // here we are getting id of locations that we need to display
  const findLocationsID = async (id) => {
    const [locations] = creatures
      .filter((el) => el._id === id)
      .map((el) => el.location);
    await locations.map((el) => fetchLocation(el));
  };

  // In this event we are changing values of some triggers, and downloading info to constants, that we are using for downloading display content
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
      setCreatureLocationsShownID("");
      setStyleTrigger();
      setFetchLocationTrigger("");
    }

    if (firstAppearance) {
      setFirstAppearance(false);
    }
  };

  // Here we are display content with first opening of component CreaturesPage
  if (firstAppearance) {
    return (
      <div className={styles.main__container + " " + styles.absolute}>
        <div>
          <div className={styles.creatures__title}>
            <h3>Creatures list:</h3>
          </div>
          {creatureDBLoaded ? (
            creatures.map((creature) => {
              return (
                <div
                  className={styles.creature_element__container}
                  key={creature._id}
                >
                  <NavLink
                    to={`/creature/${creature._id}`}
                    className={styles.creature_element_title}
                  >
                    <h4 className={styles.creature_element_title_label}>
                      {creature.title}
                    </h4>
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
            })
          ) : (
            <Preloader />
          )}
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
      <div className={styles.creatures__title}>
        <h3>Creatures list:</h3>
      </div>
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
              <h4>{creature.title}</h4>
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
  );
};
