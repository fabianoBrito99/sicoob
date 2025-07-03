import { useState } from "react";
import styles from "./Quiz.module.css";
import Image from "next/image";

type Props = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
  questionNumber: number;
  total: number;
  onAnswer: (option: string) => void;
};

export default function Quiz({
  question,
  questionNumber,
  total,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<"correct" | "incorrect" | "">("");

  const handleClick = (option: string) => {
    if (selected) return; // já respondeu
    setSelected(option);
    const isCorrect = option === question.answer;
    setStatus(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      setSelected(null);
      setStatus("");
      onAnswer(option);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>QUIZ</h1>
      <Image src={"/m1.png"} alt="Logo" height={150} width={450} />

      <div className={styles.questionBox}>
        <p className={styles.question}>{question.question}</p>
      </div>

      <div className={styles.options}>
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(opt)}
            className={`
              ${styles.option} 
              ${selected === opt && status === "correct" ? styles.correct : ""} 
              ${
                selected === opt && status === "incorrect"
                  ? styles.incorrect
                  : ""
              }
            `}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className={styles.footer}></div>
    </div>
  );
}
