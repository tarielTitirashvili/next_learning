import React from 'react'
import {useRouter} from 'next/router'

function SomethingImportant() {
  const router = useRouter()
  console.log(router)
  console.log(router.query.newsId)
  return (
    <div>SomethingImportant</div>
  )
}

export default SomethingImportant