
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import { Body } from "./components/Body/Body";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header/>
        <Body/>
      </main>
    </div>    
  );
}
