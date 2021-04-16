import React from 'react';
import Head from 'next/head'
import Router from 'next/router';
import styles from '../styles/Home.module.css';
import { UserContext } from '../store/UserStore';

const URL = 'https://www.amigosdanatureza.org.br/publicacoes/index.php/anap_brasil/article/download/2239/2082';

export default function Home() {
  const userContext = React.useContext(UserContext);

  const handleClick1 = async e => {
    e.preventDefault();

    window.open(URL, '_blank');

    Router.push('/conclusao/');

  }

  const handleClick2 = async e => {
    e.preventDefault();

    window.location.href = URL;
    
    Router.push('/conclusao/');

  }

  const handleClick3 = async e => {
    e.preventDefault();

    var a = document.createElement('a');

    document.body.appendChild(a);

    a.target = '_blank';

    a.download = true;

    a.href = URL;

    a.click();

    Router.push('/conclusao/');
    
  }

  const handleClick4 = async e => {
    e.preventDefault();

    var a = document.createElement('a');

    document.body.appendChild(a);

    a.target = '_blank';

    a.download = true;

    a.href = URL;

    a.onclick = window.open(URL, '_blank');

    a.click();

    Router.push('/conclusao/');
    
  }

  const handleClick5 = async e => {
    e.preventDefault();

    var a = document.createElement('a');

    document.body.appendChild(a);

    a.href = URL;

    a.setAttribute('data-testid', 'download-link');

    a.click();

    Router.push('/conclusao/');
    
  }

  React.useEffect(() => {
    userContext.dispatch.nome('Teste - contexto');
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>POC IOS - Download IOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          POC IOS -  <a href="https://nextjs.org">Download</a>
        </h1>

        <div className={styles.grid}>
          <button            
            onClick={handleClick1}
            className={styles.card}>
            <h3>window.open(url, '_blank')</h3>
            <p>Opção 1</p>
          </button>

          <button             
          onClick={handleClick2}
          className={styles.card}>
           <h3>windown.location</h3>
            <p>Opção 2</p>
          </button>

          <button
            onClick={handleClick3}
            className={styles.card}
            >
            <h3>a.target = '_blank'; a.click();</h3>
            <p>Opção 3</p>
          </button>

          <button
            onClick={handleClick4}
            className={styles.card}
            >
            <h3>a.onclick = window.open(URL, '_blank')</h3>
            <p>
              Opção 4
            </p>
          </button>

          <button
            onClick={handleClick5}
            className={styles.card}
            >
            <h3>código antigo</h3>
            <p>
              Opção 5
            </p>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Thainá Biudes
        </p>
      </footer>
    </div>
  )
}
