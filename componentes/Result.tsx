import Image from "next/image";
import styles from "./Result.module.css";

type Props = {
  score: number;
  total: number;
};

export default function Result({ score, total }: Props) {
  const percentage = Math.round((score / total) * 100);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.container}>

      <Image src={"/m1.png"} alt="Logo" height={150} width={450} />
      <h2 className={styles.title}>Resultado</h2>

      <div className={styles.circleContainer}>
        <svg width="150" height="150">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FF00" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
          </defs>

          <circle
            cx="75"
            cy="75"
            r={radius}
            fill="none"
            stroke="#eee"
            strokeWidth="15"
          />
          <circle
            cx="75"
            cy="75"
            r={radius}
            fill="none"
            stroke={percentage === 100 ? "#00FF00" : "url(#grad)"}
            strokeWidth="15"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 75 75)"
            style={{ transition: "stroke-dashoffset 0.5s" }}
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="24"
            fill="#fff"
          >
            {percentage}%
          </text>
        </svg>
      </div>

      <p className={styles.text}>
        Você acertou {score} de {total} perguntas!
      </p>
      <a href="/" className={styles.button}>
        Voltar ao início
      </a>
      <a href="/quiz" className={styles.button2}>
        Novo Jogo
      </a>
    </div>
  );
}
