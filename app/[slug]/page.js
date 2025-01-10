import React from 'react'
import CEHv12 from './CEHv12'

import axios from 'axios'
import { BaseLink } from '../config/ApiLink';



export async function generateStaticParams() {
  let data = [];

  try {
    const response = await axios.get(`${BaseLink}/courses`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    data = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  // Map the fetched data to the expected params structure
  const paths = data.map((course) => ({
    slug: course.slug, // Assuming your API returns a `slug` field
  }));

  return paths;
}

const page = ({params:{slug}}) => {

  return (
    <CEHv12  slug={slug}/>
  )
}

export default page