import React from "react";
import styles from "./button.module.css";
import arrow from "../public/arrow-twice.png";
import Image from "next/legacy/image";

const Button: React.FC = () => (
  <div className={styles.buttonContainer}>
    <div className={styles.rowContainer}>
      <p className={styles.buttonP}>테스트 시작하기</p>
      <div className={styles.arrow}>
        <Image src={arrow} alt={"오른쪽 화살표"} />
      </div>
    </div>
  </div>
);

export default Button;
