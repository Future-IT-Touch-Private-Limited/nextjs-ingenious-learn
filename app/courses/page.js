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
      <section className="course-category-banner">
        {/* <div className="container">
          <div className="container py-5">
            <ul id="breadcrumb" className="breadcrumb">
              <li className="item-home">
                <Link
                  className="bread-link bread-home"
                  href="/"
                  title="Home"
                >
                  Home
                </Link>
              </li>
              <li className="item-cat item-custom-post-type-courses ">
                <Link
                  className="bread-cat bread-custom-post-type-courses"
                  href=""
                  title="All Courses"
                >
                  All Courses
                </Link>
              </li>
            
            </ul>
          </div>

          <div className="row justify-content-between align-items-center mt-2">
            <div className="col-lg-7">
              <div className="item">
                
                <div>
                  
                </div>
                <div className="highlights-row">
                  <div className="highlights">
                    
                  </div>
                  <div className="highlights">
                 
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* <div className="course-category-carrer-top" id="courses">
       <div className="container">
       <div className="row tab-responsiblities p-0 m-0">
          <div className="col-12">
            <h2 className="course-category-h2 text-center">
              Explore Our Top Training Programs
            </h2>
            <div className="nav flex-column nav-pills" style={{ width: '100%', maxWidth: '100%', flexDirection: 'row !important' }}>
        {categories.map((category, index) => (
          <Link
            key={index}
            href=""
            className={`nav-link ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
            role="tab"
            aria-selected={activeCategory === category}
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="tab-content  p-md-4 p-sm-0">
        <div className="tab-pane fade show active">
          <div className="row justify-content-between">
            <div className="col-12">
              <div className="row">
                {filteredCourses.map(course => (
                  <div className="col-lg-3 col-md-4" key={course.id}>
                    <Link href={course.link} className="item">
                      <img src={course.imgSrc} alt={course.title} className="w-100 d-block mx-auto" loading="lazy" />
                      <div className="item-body">
                        <h4>{course.title}</h4>
                        <button>Read More</button>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
            
          </div>
        </div>
       </div>
       
      </div> */}

      <CourseDetailsnew />
      <div className="mt-90">{/* <Testimonial /> */}</div>
    </>
  );
};

export default CoursePages;
