"use client"
import React from 'react'
import CourseDetailsnew from '../../training-calendar/CourseDetailsnew'

const page = ({params:{slug}}) => {
   
  return (
    <div>
      <head>    
      <title>{slug}</title>
      <meta name="description" content={slug} />

      </head>
    <CourseDetailsnew slug={slug}/>

     
    </div>
  )
}

export default page
