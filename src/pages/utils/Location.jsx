import React from "react";
import styles from "./Location.module.css";
import { ArcherElement } from "react-archer";

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
}) => {
  const arrowsArray = arrows.map((e) => e);
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
          <p>{text[0]}</p>
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
