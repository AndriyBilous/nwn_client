import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LocationsPage.module.css";
import { ArcherContainer, ArcherElement } from "react-archer";
import { getAllLocations } from "../redux/features/locationSlice";
import { Location } from "./utils/Location";

export const LocationsPage = () => {
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.location);

  let archerContainerRef = useRef(null);

  useEffect(() => {
    dispatch(getAllLocations());
  }, [dispatch]);
  console.log(locations);

  useEffect(() => {
    archerContainerRef.current.refreshScreen();
  }, [locations]);

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
                  key={e._id}
                  borderColor={e.borderColor}
                />
              );
            })}

          <div className={styles.scheme__container_2}>
            {/* <div className={styles.size_2}>
              <ArcherElement
                id="element1"
                relations={[
                  {
                    targetId: "element2",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "#bd0000", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Чернолесье. Погост</p>
                </div>
              </ArcherElement>
            </div>

            <div className={styles.size_2}>
              <ArcherElement id="element2">
                <div
                  className={
                    styles.block__container + " " + styles.blue_background
                  }
                >
                  <p>Безлюдные земли. Черная башня. Служебные помещения</p>
                </div>
              </ArcherElement>
            </div> */}
          </div>
        </ArcherContainer>
      </div>
    </div>
  );
};
