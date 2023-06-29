import React from "react";
import styles from "./CreaturesPage.module.css";
import { ArcherContainer, ArcherElement } from "react-archer";

const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};

const boxStyle = { padding: "10px", border: "1px solid black" };

export const CreaturesPage = () => {
  return (
    <div className={styles.creatures__container}>
      <div className={styles.scheme__container}>
        <div style={{ height: "100%", width: "100%", margin: "50px" }}>
          <ArcherContainer strokeColor="red">
            <div style={rootStyle}>
              <ArcherElement
                id="element1"
                relations={[
                  {
                    targetId: "element2",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeDasharray: "5,5" },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Чернолесье. Погост</p>
                </div>
              </ArcherElement>
            </div>
            <div style={rowStyle}>
              <ArcherElement id="element2">
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Чернолесье</p>
                </div>
              </ArcherElement>
              <ArcherElement id="element3">
                <div style={boxStyle}>Element 3</div>
              </ArcherElement>

              <ArcherElement
                id="element4"
                relations={[
                  {
                    targetId: "element1",
                    targetAnchor: "right",
                    sourceAnchor: "left",
                    label: "Arrow 3",
                  },
                ]}
              >
                <div style={boxStyle}>Element 4</div>
              </ArcherElement>
            </div>
          </ArcherContainer>
        </div>
      </div>
    </div>
  );
};
