import React from 'react';
import Head from 'next/head'
import { UserContext } from '../store/UserStore';
import styles from '../styles/Home.module.css'

export default function Home() {
  const userContext = React.useContext(UserContext);

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
        <h2>Contexto: {userContext.state.nome && userContext.state.nome}</h2>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Thainá Biudes
        </p>
      </footer>
    </div>
  )
}
