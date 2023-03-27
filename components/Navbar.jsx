import React from 'react'
import Link from 'next/link'
import styles from "@next/styles/Home.module.css"

const Navbar = () => {
  return (
    <>
    <div className={`${styles.nav}`}>
        <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
            <li><Link href={"/contactus"}>Contacts</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar