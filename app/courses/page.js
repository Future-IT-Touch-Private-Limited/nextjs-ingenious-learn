"use client";

import React, { useState, useEffect } from "react";

import CourseDetailsnew from "../training-calendar/CourseDetailsnew";

const CoursePages = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <head>
        <title>courses - Ingenious Learn</title>
        <meta name="description" content={"courses"} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <section className="course-category-banner">
       
      </section>


      <CourseDetailsnew />
      <div className="mt-90">{/* <Testimonial /> */}</div>
    </>
  );
};

export default CoursePages;
