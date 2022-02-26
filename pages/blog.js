import React from 'react'
import styles from '../styles/Blog.module.css' 
import Link from 'next/link'
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          
            <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
              <h3>How to learn javascript in 2022</h3></Link>
              <p>Javascript is the language used to design logic for the web </p>
            </div>
            <div className="blogItem">
            <Link href={'/blogpost/learn-javascript'}>
              <h3>How to learn javascript in 2022</h3></Link>
              <p>Javascript is the language used to design logic for the web </p>
            </div>
            <div className="blogItem">
            <Link href={'/blogpost/learn-javascript'}>
              <h3>How to learn javascript in 2022</h3></Link>
              <p>Javascript is the language used to design logic for the web </p>
            </div>
            </main>
        </div>
  )
}

export default Blog