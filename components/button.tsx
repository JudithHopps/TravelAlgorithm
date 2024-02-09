import React from "react";
import styles from "./button.module.css";

type ViewSourceProps = {
  pathname: string;
};

const Button: React.FC = () => (
  <div className={styles.buttonContainer}>
    <div className={styles.rowContainer}>
      <p className={styles.buttonP}>테스트 시작하기</p>
      <p className={styles.buttonP}>{">>"}</p>
    </div>
  </div>
);

export default Button;
