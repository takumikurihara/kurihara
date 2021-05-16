import styles from "../styles/Home.module.css";
import React from "react";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page}</h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}</code>
      </p>
    </div>
  );
}