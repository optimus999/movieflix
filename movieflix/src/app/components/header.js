import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './nav'


const header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href='/'>
            <Image src='/logo.png' alt='my logo ' width={170} height={100}/>
            </Link>
        </div>
        <Nav/>
    </header>
  )
}

export default header
