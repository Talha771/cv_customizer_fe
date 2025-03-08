import About from "./components/About/About";
import HomeLanding from "./components/HomeLanding/HomeLanding";
import Projects from "./components/Projects/Projects";
import SideNav from "./components/SideNav/SideNav";
import Vertical from "./components/VerticalLine/Vertical";
import styles from "./page.module.css";

export default function Home() {
  // yahan bhi create IntersectionObserver API.
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.sideNav}>
        <SideNav/>
        </div>
        <div className={styles.About} id="About"> 
          <About />
        </div>
        <Vertical />
        <div id="Projects">
        <Projects/>
        </div>
        <Vertical />
      </main>
    </div>
  );
}

// Should be landing page
