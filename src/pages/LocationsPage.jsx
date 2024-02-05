import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./LocationsPage.module.css";
import { ArcherContainer } from "react-archer";
import { Location } from "./utils/Location";
import Preloader from "./utils/Preloader/Preloader";

export const LocationsPage = () => {
  const [locations, setLocations] = useState("");

  // const { locations } = useSelector((state) => state.location);
  const locationsDB = useSelector((state) => state.location);

  useEffect(() => {
    if (locationsDB.loaded === true) {
      setLocations(locationsDB.locations);
    }
    console.log(locationsDB.loaded);
  }, [locationsDB.loaded, locationsDB.locations]);

  let archerContainerRef = useRef(null);

  return (
    <div className={styles.locations__container}>
      <div className={styles.scheme__container}>
        {locationsDB.loaded ? (
          <ArcherContainer strokeColor="red" ref={archerContainerRef}>
            {locations.length >= 1 &&
              locations.map((e) => {
                return (
                  <Location
                    positionTop={e.positionTop}
                    positionLeft={e.positionLeft}
                    positionId={e.positionId}
                    maxWidth={e.maxWidth}
                    arrows={e.arrows}
                    text={e.text}
                    bgColor={e.bgColor}
                    color={e.color}
                    borderColor={e.borderColor}
                    uniqueId={e._id}
                    key={e._id}
                  />
                );
              })}

            <div className={styles.scheme__container_2}></div>
          </ArcherContainer>
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};
