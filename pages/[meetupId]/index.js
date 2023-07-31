import { useRouter } from 'next/router'
import React from 'react'

function MeetupId() {

  const router = useRouter()

  const meetupId = router.query.meetupId

  console.log('meetupId', meetupId)

  return (
    <div>MeetupId {meetupId}</div>

  )
}

export default MeetupId