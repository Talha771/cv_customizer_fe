import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import HomeLanding from "./components/HomeLanding/HomeLanding";
import Projects from "./components/Projects/Projects";
import SideNav from "./components/SideNav/SideNav";
import Vertical from "./components/VerticalLine/Vertical";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.sideNav}>
          <SideNav/>
        </div>
        <div className={styles.content}>
          <section className={styles.About} id="About"> 
            <About />
          </section>
          <Vertical />
          <section className={styles.section} id="Projects">
            <Projects/>
          </section>
          <Vertical />
          <section className={styles.section} id="Experience">
            <Experience/>
          </section>
        </div>
      </main>
    </div>
  );
}

// Should be landing page
