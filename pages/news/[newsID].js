import React from 'react'
import {useRouter} from 'next/router'

function SomethingImportant() {
  const router = useRouter()
  return (
    <div>{router.query.newsId}</div>
  )
}

export default SomethingImportant