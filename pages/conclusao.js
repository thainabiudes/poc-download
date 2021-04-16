import Head from 'next/head'
import Router from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POC IOS - Download IOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          POC IOS -  <a href="https://nextjs.org">Conclusão</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Thainá Biudes
        </p>
      </footer>
    </div>
  )
}
