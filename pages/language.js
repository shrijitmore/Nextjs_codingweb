import Link from 'next/link'
import React, { useEffect } from 'react'
import style from '../styles/lan_page.module.css'
import { useState } from 'react'
import style1 from '../styles/Home.module.css'

const language = () => {
  const [lan, setlan] = useState([])
  useEffect(()=>{
    console.log("useeffect")
    fetch("http://localhost:3000/api/lan").then((a)=>{
      return a.json();})
    .then((parsed)=>{
      console.log(parsed)
      setlan(parsed)
    })
  },[])
  return (
    <div>
   <nav className={style.body}>
    <Link href="/C"><a><li><a0> C  </a0></li></a></Link>
    <Link href="/C advance"><a><li><a1> C Advance </a1></li></a></Link>
    <Link href="/java"><a><li> <a2>Java</a2> </li></a></Link>
    <Link href="/python"><a><li> <a3>Python</a3> </li></a></Link>
    </nav>
    <p className={style.para}> like human beings have developed their own languages to communicate which vary as per cultures and countries, computers also need a common medium of instruction to understand the operations and commands put in. Computer languages are the essence of an operating system as they help program each and every command as well as application in the computer. Coming under the discipline of Computer Science, programming languages are of different types and have a diverse set of features.</p>
    {lan.map((item)=>{
        return<div className={style.heading}>
     <Link href={'/History-C'}>
     <h1>{item.title}</h1></Link>
     <p>Hello</p>
     </div>
      })}
      </div>
  )
}

export default language