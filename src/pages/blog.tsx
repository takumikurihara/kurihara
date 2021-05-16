import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kurihara</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/blogs.js</code>
        </p>
        <Links></Links>
      </main>
      <Footer></Footer>
    </div>
  );
}
