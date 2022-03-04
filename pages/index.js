import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
      </Head>

      <div className={styles.container}>
        <h1>
          Hello React
        </h1>
        <Link href="/">Ninja Listing</Link>
      </div>
    </>
  )
}
