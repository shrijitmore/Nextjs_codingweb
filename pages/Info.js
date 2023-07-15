import React from 'react'
import Style from '../styles/info.module.css'
import Link from 'next/link'

const Info = () => {
  return (<div>
    <p className={Style.description}>
      <a>
         <h1><Link href='/FirstQue'><a><li>What will be the First Question? </li></a></Link></h1>
      </a>
       </p>
  </div>
  )
}

export default Info