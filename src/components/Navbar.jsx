import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const activeStyles = {
    color: "red",
  };
  return (
    <div className={styles.navigation__container}>
      <ul className={styles.navigation_list__container}>
        <li className={styles.navigation_list__item}>
          <NavLink
            to={"/"}
            href="/"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
            className={styles.navigation_list__link}
          >
            Main
          </NavLink>
        </li>
        <li className={styles.navigation_list__item}>
          <NavLink
            to={"/locations"}
            href="/"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
            className={styles.navigation_list__link}
          >
            Locations
          </NavLink>
        </li>
        <li className={styles.navigation_list__item}>
          <NavLink
            to={"/creatures"}
            href="/"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
            className={styles.navigation_list__link}
          >
            Creatures
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
