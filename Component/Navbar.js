import React from 'react'
import Style from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={Style.nav}>
    <Link href='/'><a><li>Home</li></a></Link>
    <Link href="/language"><a><li>Languages</li></a></Link>
    <Link href='/Info'><a><li>Info</li></a></Link>
    <Link href='/About'><a><li>About</li></a></Link>
    </nav>
  )
}

export default Navbar