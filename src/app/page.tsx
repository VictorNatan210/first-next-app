import styles from "./page.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Navbar></Navbar>
      </header>
      <main className={styles.main}>
        
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
