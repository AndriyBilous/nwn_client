import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./LocationsPage.module.css";
import { ArcherContainer } from "react-archer";
import { Location } from "./utils/Location";

export const LocationsPage = () => {
  const { locations } = useSelector((state) => state.location);

  let archerContainerRef = useRef(null);

  return (
    <div className={styles.locations__container}>
      <div className={styles.scheme__container}>
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
      </div>
    </div>
  );
};
