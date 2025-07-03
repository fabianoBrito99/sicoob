import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>QUIZ</h1>
      <Image src={"/m1.png"} alt="Logo" height={150} width={450} />
      <p className={styles.title2}>Teste seus conhecimentos e divirta-se com a gente! </p>
      <Link href="/quiz" className={styles.button}>
        Iniciar Quiz
      </Link>
    </div>
  );
}
