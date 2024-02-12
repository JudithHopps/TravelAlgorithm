"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import styles from "./page.module.css";
import ViewSource from "../../components/view-source";
import ticket from "../../public/ticket.png";

type Props = {
  question: string;
  onClick: () => void;
};
type QuestionsType = {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
};

const QuestionDiv: React.FC<Props> = ({ question, onClick }) => (
  <div className={styles.QuestionDiv} onClick={onClick}>
    <p className={styles.p}> {question}</p>
  </div>
);
const Test = () => {
  const [allstage, setAllstage] = useState(12);
  const [stage, setStage] = useState(1);
  const data: QuestionsType[] = require("../../public/data/questionData.json");
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setAllstage(data.length);
    }
  }, [data]);

  const increaseStage = () => {
    if (stage + 1 == allstage + 1) {
      router.push("/result");
      return;
    }
    setStage(stage + 1);
  };
  return (
    <div className={styles.test}>
      <ViewSource pathname="app/test/page.tsx" />
      <h1>temp</h1>
      {/* <Image src={main} alt="main" height={160} objectFit="cover" /> */}
      <div className={styles.Container}>
        <p>
          {stage} / {allstage}{" "}
        </p>
        <h1>{data[stage - 1].question}</h1>
        <div className={styles.ticket}>
          <Image src={ticket} alt="ticket" />
        </div>
        <div className={styles.QuestionContainer}>
          <QuestionDiv
            question={data[stage - 1].answer1}
            onClick={increaseStage}
          />
          <QuestionDiv
            question={data[stage - 1].answer2}
            onClick={increaseStage}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
