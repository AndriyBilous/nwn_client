import React, { useState } from "react";
import styles from "./LocationsPage.module.css";
import { ArcherContainer, ArcherElement } from "react-archer";

const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};

const boxStyle = { padding: "10px", border: "1px solid black" };

export const LocationsPage = () => {
  return (
    <div className={styles.locations__container}>
      <div className={styles.scheme__container}>
        <ArcherContainer strokeColor="red">
          <div className={styles.scheme__container_2}>
            {/* First row */}

            <div className={styles.size_2}>
              <ArcherElement
                id="element1"
                relations={[
                  {
                    targetId: "element4",
                    targetAnchor: "top",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Чернолесье. Погост</p>
                </div>
              </ArcherElement>
            </div>

            <div className={styles.size_2}>
              <ArcherElement
                id="element2"
                relations={[
                  {
                    targetId: "element11",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Черная башня. Служебные помещения</p>
                </div>
              </ArcherElement>
            </div>
            {/* Second row */}

            <div className={styles.size_3}>
              <ArcherElement
                id="element3"
                relations={[
                  {
                    targetId: "element7",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Чернолесье</p>
                </div>
              </ArcherElement>
            </div>

            <div className={styles.size_3}>
              <ArcherElement
                id="element4"
                relations={[
                  {
                    targetId: "element3",
                    targetAnchor: "right",
                    sourceAnchor: "left",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Чернолесье. Чаща</p>
                </div>
              </ArcherElement>
            </div>

            <div className={styles.size_3}>
              <ArcherElement
                id="element5"
                relations={[
                  {
                    targetId: "element2",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element9",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Черная башня. Храм темных богов</p>
                </div>
              </ArcherElement>
            </div>
            {/* Third row */}
            <div className={styles.size_6}>
              <ArcherElement
                id="element6"
                relations={[
                  {
                    targetId: "element13",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Иглы стужи. Подземный проход (застава)</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element7"
                relations={[
                  {
                    targetId: "element14",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Иглы стужи. Плато</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element8"
                relations={[
                  {
                    targetId: "element14",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Иглы стужи. Пещера</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element9"
                relations={[
                  {
                    targetId: "element10",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element15",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Черная башня</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element10"
                relations={[
                  {
                    targetId: "element11",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Карстовые пещеры. Подземное озеро</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element11"
                relations={[
                  {
                    targetId: "element18",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element16",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Карстовые пещеры</p>
                </div>
              </ArcherElement>
            </div>
            {/* Forth row */}
            <div className={styles.size_5}>
              <ArcherElement
                id="element12"
                relations={[
                  {
                    targetId: "element6",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Иглы стужи. Предгорье. Ледяная тюрьма.</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_5}>
              <ArcherElement
                id="element13"
                relations={[
                  {
                    targetId: "element14",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element17",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Иглы стужи. Предгорье</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_5}>
              <ArcherElement
                id="element14"
                relations={[
                  {
                    targetId: "element23",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Иглы стужи. Залив разбитых кораблей.
                    (Побережье моря бурь)
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_5}>
              <ArcherElement
                id="element15"
                relations={[
                  {
                    targetId: "element23",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Великаньи пустоши. Руины в каньоне</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_5}>
              <ArcherElement
                id="element16"
                relations={[
                  {
                    targetId: "element25",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Рачье герцогство. Инсанна. Лаборатория
                    алхимика
                  </p>
                </div>
              </ArcherElement>
            </div>
            {/* Fifth row */}
            <div className={styles.size_4}>
              <ArcherElement
                id="element17"
                relations={[
                  {
                    targetId: "element22",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Ледяные поля</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_4}>
              <ArcherElement
                id="element18"
                relations={[
                  {
                    targetId: "element13",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Иглы стужи. Предгорье. Ледяная усыпальница
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_4}>
              <ArcherElement
                id="element19"
                relations={[
                  {
                    targetId: "element23",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Великаньи пустоши. Заброшенная застава</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_4}>
              <div className={styles.block__container}>
                <ol>
                  <span>Корабли в:</span>
                  <li>Побережье моря бурь</li>
                  <li>Заграба</li>
                  <li>Стальная пристань</li>
                  <li>Гаррак</li>
                  <li>Хребет мира</li>
                </ol>
              </div>
            </div>
            {/* Sixth row */}
            <div className={styles.size_6}>
              <ArcherElement
                id="element21"
                relations={[
                  {
                    targetId: "element22",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Д'Сан'Дор. Ельник (застава)</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element22"
                relations={[
                  {
                    targetId: "element27",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element35",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element23",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Д'Сан'Дор</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element23"
                relations={[
                  {
                    targetId: "element27",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element29",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Великаньи пустоши</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element24"
                relations={[
                  {
                    targetId: "element33",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Рачье герцогство. Инсанна. Заброшенные
                    катакомбы
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element25"
                relations={[
                  {
                    targetId: "element26",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Рачье герцогство. Инсанна. Канализация.
                    Стоки
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_6}>
              <ArcherElement
                id="element26"
                relations={[
                  {
                    targetId: "element34",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Рачье герцогство. Инсанна. Канализация.
                    Отстойник
                  </p>
                </div>
              </ArcherElement>
            </div>
            {/* Sevent`s row */}
            <div className={styles.size_8}>
              <ArcherElement
                id="element27"
                relations={[
                  {
                    targetId: "element37",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Деревня в снегах</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_8}>
              <div className={styles.block__container}>
                <ol>
                  <li>Грифон в южный форт</li>
                </ol>
              </div>
            </div>
            <div className={styles.size_8}>
              <ArcherElement
                id="element29"
                relations={[
                  {
                    targetId: "element19",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Великаньи пустоши. Заводь</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_8}>
              <ArcherElement
                id="element30"
                relations={[
                  {
                    targetId: "element23",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Иглы стужи. Пещера великанов</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_8}>
              <ArcherElement
                id="element31"
                relations={[
                  {
                    targetId: "element32",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element19",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Рачье герцогство. Развалины первой крепости
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_8}>
              <ArcherElement
                id="element32"
                relations={[
                  {
                    targetId: "element33",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Рачье герцогство. Инсанна. Ворота</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_8}>
              <ArcherElement
                id="element33"
                relations={[
                  {
                    targetId: "element34",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Рачье герцогство. Инсанна.</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_8}>
              <ArcherElement
                id="element34"
                relations={
                  [
                    // {
                    //   targetId: "element34",
                    //   targetAnchor: "left",
                    //   sourceAnchor: "right",
                    //   style: { strokeColor: "blue", strokeWidth: 1 },
                    // },
                  ]
                }
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Рачье герцогство. Инсанна. Канализация</p>
                </div>
              </ArcherElement>
            </div>
            {/* Eighth row */}
            <div className={styles.size_7}>
              <ArcherElement
                id="element35"
                relations={[
                  {
                    targetId: "element36",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Дорога на Д'Сан'Дор. Застава Рачьего
                    Герцогства.
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_7}>
              <ArcherElement
                id="element36"
                relations={[
                  {
                    targetId: "element42",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Дорога на Д'Сан'Дор.</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_7}>
              <ArcherElement
                id="element37"
                relations={[
                  {
                    targetId: "element38",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element29",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Великаньи пустоши. Дикое ущелье</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_7}>
              <ArcherElement
                id="element38"
                relations={[
                  {
                    targetId: "element39",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Старая дорога через лес.</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_7}>
              <ArcherElement
                id="element39"
                relations={[
                  {
                    targetId: "element40",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                  {
                    targetId: "element32",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Рачье Герцогство. Драконий замок.
                    Предместная крепость
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_7}>
              <ArcherElement
                id="element40"
                relations={[
                  {
                    targetId: "element33",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>
                    Безлюдные земли. Рачье Герцогство. Инсанна. Драконий замок
                  </p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_7}>
              <ArcherElement
                id="element41"
                relations={[
                  {
                    targetId: "element33",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                  },
                ]}
              >
                <div className={styles.block__container}>
                  <p>Безлюдные земли. Рачье Герцогство. Инсанна. Арена</p>
                </div>
              </ArcherElement>
            </div>
            {/* Ninth row */}
            <div className={styles.size_2}>
              <ArcherElement
                id="element42"
                // relations={[
                //   {
                //     targetId: "element33",
                //     targetAnchor: "bottom",
                //     sourceAnchor: "top",
                //     style: { strokeColor: "blue", strokeWidth: 1 },
                //   },
                // ]}
              >
                <div className={styles.block__container}>
                  <p>Горы Отчаяния. Проход в безлюдные земли.</p>
                </div>
              </ArcherElement>
            </div>
            <div className={styles.size_7}>
              <div
                className={styles.block__container + " " + styles.hidden}
              ></div>
            </div>
          </div>
        </ArcherContainer>
      </div>
    </div>
  );
};
