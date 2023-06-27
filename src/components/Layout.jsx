import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.children__container}>{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
