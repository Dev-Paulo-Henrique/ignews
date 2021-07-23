import styles from '../styles/home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ínicio | Ig.News</title>
      </Head>
      <h1 className={styles.title}>

        Olá Pessoal
      </h1>
    </>
  )
}
