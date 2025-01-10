"use client"
import React from 'react'
import CourseDetailsnew from '../../training-calendar/CourseDetailsnew'

const page = ({params:{slug}}) => {
   
  return (
    <div>
    <CourseDetailsnew slug={slug}/>

     
    </div>
  )
}

export default page
