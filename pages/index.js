import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Dummy from '../components/Dummy'


export default function Home() {
  console.log(styles);

  return (
    <div className={styles.container}>
      <Dummy></Dummy>
    <style jsx>
    {`
      .mySpan{
        color:red
      }
    `}

    </style>
      <Head>
        <title>Shivam Coder Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/sc.js"></script>
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload">

      </Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'>
          <li>
            Home
          </li>
          </Link>
          <Link href='/about'>
          <li>
            About
          </li>
          </Link>
          <Link href='/contact'>
          <li>
            Contact 
          </li>
          </Link>
          <Link href='/blog'>
          <li>
            Blog 
          </li>
          </Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="mySpan dummy"> Shivam Coder Blog</span>
       
        </h1>

        <p className={styles.description}>
          A blog for coders by a coder 
        </p>
        <div className="blogs">
          <h2>Popular Blogs </h2>
            <div className="blogItem">
              <h3>How to learn javascript in 2022</h3>
              <p>Javascript is the language used to design logic for the web </p>
            </div>
            <div className="blogItem">
              <h3>How to learn javascript in 2022</h3>
              <p>Javascript is the language used to design logic for the web </p>
            </div>
            <div className="blogItem">
              <h3>How to learn javascript in 2022</h3>
              <p>Javascript is the language used to design logic for the web </p>
            </div>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
