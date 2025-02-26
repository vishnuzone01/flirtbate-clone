import styles from "./page.module.css";
import Homepage from "../app/components/Homepage"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Homepage />
      </main>
       </div>
  );
}
