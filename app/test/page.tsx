"use client";

import Image from "next/legacy/image";
import styles from "./page.module.css";
import ViewSource from "../../components/view-source";
import main from "../../public/main.png";
import ticket from "../../public/ticket.png";

import { useState } from "react";
type Props = {
  question: string;
};
const QuestionDiv: React.FC<Props> = ({ question }) => (
  <div className={styles.QuestionDiv}>
    <p className={styles.p}> {question}</p>
  </div>
);
const Test = () => {
  const [allstage, setAllstage] = useState(12);
  const [stage, setStage] = useState(0);

  return (
    <div className={styles.test}>
      <ViewSource pathname="app/test/page.tsx" />
      <h1>temp</h1>
      {/* <Image src={main} alt="main" height={160} objectFit="cover" /> */}
      <div className={styles.Container}>
        <h1>
          {stage} / {allstage}{" "}
        </h1>
        <div className={styles.ticket}>
          <Image src={ticket} alt="ticket" />
        </div>
        <div className={styles.QuestionContainer}>
          <QuestionDiv question="질문 1" />
          <QuestionDiv question="질문 2" />
        </div>
      </div>
    </div>
  );
};

export default Test;
