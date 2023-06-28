import React from 'react'
import Link from 'next/link'

function News() {
  return (
    <>
      <h1> The News Page</h1>
      <ul>
        <li><Link href='/news/NextJS-Is-A-Great-Framework'>NextJS Is A Great Framework</Link> </li>
        <li><Link href='/news/Something-Else'>Something Else</Link></li>
      </ul>
    </>
  )
}

export default News