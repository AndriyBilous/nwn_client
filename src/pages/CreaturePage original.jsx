import React, { useEffect, useState } from "react";
import styles from "./CreaturePage.module.css";
import CreatureDescription from "./utils/CreatureDescription.jsx";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";

export const CreaturePage = () => {
  const [creature, setCreature] = useState("");
  const params = useParams();

  // Here we are downloading data of creature, that we will display
  const fetchCreature = async () => {
    const { data } = await axios.get(`/creature/${params.id}`);
    setCreature(data);
  };

  // Here we are launching function one time (with first creating of this component)
  useEffect(() => {
    fetchCreature();
  }, []);

  return (
    <div className={styles.creature__container}>
      <div className={styles.creature_props__container}>
        <div className={styles.creature_image__container}>
          {creature?.imgUrl && (
            <img
              src={`http://localhost:3002/${creature.imgUrl}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "http://localhost:3002/forest_01.jpg";
              }}
              alt="creatureIMG"
              className={styles.creature_image}
            ></img>
          )}
        </div>
        <CreatureDescription
          title={creature.title}
          imgUrl={creature.imgUrl}
          abilities={creature.abilities}
          lvl={creature.lvl}
          ab={creature.ab}
          locations={creature.location}
        />
      </div>
    </div>
  );
};
