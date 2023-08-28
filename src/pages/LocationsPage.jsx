import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LocationsPage.module.css";
import { ArcherContainer } from "react-archer";
import { getAllLocations } from "../redux/features/locationSlice";
import { Location } from "./utils/Location";

export const LocationsPage = () => {
  // const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.location);

  let archerContainerRef = useRef(null);

  // Here we are downloading all locations data (moved this functionality to App.js for code optimization)
  // useEffect(() => {
  //   if (locations.length === 0) {
  //     dispatch(getAllLocations());
  //   }
  // }, [dispatch, locations]);

  // If arrows don`t appear, this may help
  // useEffect(() => {
  //   archerContainerRef.current.refreshScreen();
  // }, [locations]);

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
