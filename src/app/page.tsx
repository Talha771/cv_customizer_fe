import About from "./components/About/About";
import HomeLanding from "./components/HomeLanding/HomeLanding";
import Projects from "./components/Projects/Projects";
import Vertical from "./components/VerticalLine/Vertical";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.About}>
          <About />
        </div>
        <Vertical />
        <Projects/>
        <Vertical />
      </main>
    </div>
  );
}

// Should be landing page
