import React, { useState } from "react";
import styles from "./CreaturesPage.module.css";
import { CreatureList } from "./utils/CreatureList";
import { CreatureLocations } from "./utils/CreatureLocations";

export const CreaturesPage = () => {
  const [locationsTrigger, setLocationsTrigger] = useState(true);
  const [firstAppearance, setFirstAppearance] = useState(true);

  const handleChangeFirstAppearance = () => {
    if (setFirstAppearance) {
      setFirstAppearance(false);
    }
  };

  const handleChangeLocationsTrigger = () => {
    setLocationsTrigger(!locationsTrigger);
  };

  return (
    <div className={styles.creatures__container}>
      <CreatureList
        styleTrigger={locationsTrigger}
        setStyleTrigger={handleChangeLocationsTrigger}
        firstAppearance={firstAppearance}
        setFirstAppearance={handleChangeFirstAppearance}
      />
      <CreatureLocations
        styleTrigger={locationsTrigger}
        firstAppearance={firstAppearance}
      />
    </div>
  );
};
