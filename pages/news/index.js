import React, { useEffect, useState } from 'react'
import MeetupList from '@/components/meetups/MeetupList'

const DUMMY_LIST = [
  {
    id: 'm1',
    title: 'dummy meeting',
    image: 'https://m.economictimes.com/thumb/msid-69925116,width-1200,height-900,resizemode-4,imgsize-393646/types-of-buildings-as-categorised-by-government-and-how-infrastructure-development-can-shape-indias-future.jpg',
    address: 'something somewhere',
    description: 'this is a second meetup'
  }, 
  {
    id: 'm12',
    title: 'dummy meeting',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8QYHnxBcqvQXWnzOrNsEYAXsPqBGhlhGmQ&usqp=CAU',
    address: 'something somewhere',
    description: 'this is a second meetup'
  },
  {
    id: 'w',
    title: 'dummy meeting',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwnvSf2M7gSOZIygiKYZCyYvtHBZr3V0OrQ&usqp=CAU',
    address: 'something somewhere',
    description: 'this is a second meetup'
  }
]
  
function News(props) {
  const [meetups, setMeetups]=useState([])
  useEffect(()=>{
    setMeetups(DUMMY_LIST)
  },[])
  return (
    <>
      <h2> news page </h2>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

// export async function getStaticProps(){
//   return { props: {
//     meetups: DUMMY_LIST
//     },
//     revalidate: 10
//   }
// }

export async function getServerSideProps(context) {
  // getServerSideProps is better when we need to update data all the time ot to access req or res objects
  const { req, res } = context

  return { 
    props: {
      meetups: DUMMY_LIST
    },
    revalidate: 10
  }
}

export default News