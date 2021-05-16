import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../components/Footer/Footer";
import { Main } from "../../components/Main/Main";
import { Header } from "../../components/Header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kurihara</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Main page="blog" />
      <Footer />
    </div>
  );
}
