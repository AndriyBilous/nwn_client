import React from "react";
import styles from "./Location.module.css";
import { ArcherElement } from "react-archer";
import { NavLink } from "react-router-dom";

export const Location = ({
  positionTop,
  positionLeft,
  text,
  arrows,
  positionId,
  bgColor = "#ffffff",
  color = "#000000",
  maxWidth = "fit-content",
  borderColor = "#bd0000",
  uniqueId,
}) => {
  const arrowsArray = arrows.map((e) => e);
  const colorA = color;
  return (
    <ArcherElement id={positionId} relations={arrowsArray}>
      <div
        style={{
          position: "absolute",
          top: positionTop,
          left: positionLeft,
          backgroundColor: bgColor,
          color: color,
          maxWidth: maxWidth,
          borderColor,
        }}
        className={text.length === 1 ? styles.container : styles.container_oval}
      >
        {text.length === 1 ? (
          <NavLink
            to={`/location/${uniqueId}`}
            style={({ isActive }) => ({
              color: isActive ? "black" : color,
              textDecoration: "none",
            })}
          >
            <p>{text[0]}</p>
          </NavLink>
        ) : (
          <ol>
            {text.map((e, i) => {
              if (i === 0) {
                return <span key={i}>{e}</span>;
              }
              return <li key={i}>{e}</li>;
            })}
          </ol>
        )}
      </div>
    </ArcherElement>
  );
};
