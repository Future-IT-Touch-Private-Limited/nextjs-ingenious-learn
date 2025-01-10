"use client"
import React, { useEffect, useState } from "react";

// import { StorageLink } from "../components/apiLink";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from "../features/categories/categorySlice";
import Link from "next/link";
import Image from "next/image";
import { StorageLink } from "../components/apiLink";
const initialCategories = [
  { link: "/gym", icon: "/images/security.webp", title: "Cyber Security", count: 1 },
  { link: "/hotel", icon: "/images/cloud-computing.webp", title: "Cloud Security", count: 0 },
  { link: "/travel", icon: "/images/eye-scan.webp", title: "Data Privacy", count: 2 },
  { link: "/furniture", icon: "/images/inspection.webp", title: "Auditing", count: 1 },
  {
    link: "/electronics",
    icon: "/images/file-protection.webp",
    title: "Security Testing",
    count: 2,
  },
  { link: "/resort", icon: "/images/product.webp", title: "Product Trainings", count: 0 },
  { link: "/medical", icon: "/images/security-system.webp", title: "Security Operation", count: 1 },
  { link: "/education", icon: "/images/security.webp", title: "Offensive Security", count: 1 },
  { link: "/realestate", icon: "/images/national-security-agency.webp", title: "Defensive Security", count: 1 },
  { link: "/ecommerce", icon: "/images/suspect.webp", title: "Identity & Access", count: 1 },
  { link: "/shopping", icon: "/images/regulation.webp", title: "Governance, Risk & Compliance", count: 2 },
  { link: "/fitness", icon: "/images/networking.webp", title: "Network Security Training", count: 1 },
];

const Herotwo = () => {
  const [categories, setCategories] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(3);
  const [viewAll, setViewAll] = useState(false);




  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCategories(initialCategories.slice(0, visibleIndex));
  }, [visibleIndex]);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 767) {
      setVisibleIndex(7); // Mobile, show 3 cards
    } else if (width <= 991) {
      setVisibleIndex(5); // Tablet, show 5 cards
    } else {
      setVisibleIndex(7); // Laptop and above, show 7 cards
    }
  };

  const handleViewAllClick = () => {
    setViewAll(true);
  };

  const visibleCategories = viewAll ? initialCategories : categories;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const dispatch = useDispatch();
  const categoriess = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }

  }, [status, dispatch]);





  return (
    <section className="category-section category-main-hero">
      <div className="container">
        <div className="row g-3 g-lg-4">

          {categoriess.map((category, index) => (
            <div key={index} className="col-xl-3 col-md-6 col-3">
              <Link
                href={`/courses/${category.slug}`}
              >
                <div className="category-box" data-aos="flip-left">
                  <div className="icon-box">
                    <Image src={`${StorageLink}/${category.icon}`} alt="" width={900} height={900} className=" " />
                  </div>
                  <div>
                    <h5>{category.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {!viewAll && (
            <div className="col-xl-3 col-md-6 col-3">
              <div className="category-box" onClick={handleViewAllClick} >
                <div className="icon-box" data-aos="flip-right">
                  <img src="/images/analysis.webp" alt="" />
                </div>
                <div>
                  <h5>View All Courses</h5>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Herotwo;
