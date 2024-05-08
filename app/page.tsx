import styles from "./page.module.css";
import React from "react";
import Features from "../components/Features";

export default async function Home() {
  return (
    <div className={styles.outline}>
      <div className={"container"}>
        <Features />
      </div>
    </div>
  );
}
