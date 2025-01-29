import MainComp from "../MainComp";


import axios from 'axios'

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



function page({params:{slug}}) {
 
  return (
    <>
   
     <MainComp slug={slug}/>
        

    </>
  );
}

export default page;


