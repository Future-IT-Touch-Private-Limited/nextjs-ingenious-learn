"use client"

import React, { useState, useEffect } from "react";
import { blogData , categories } from "../components/CommonData/CardsDetailData";

import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaTag,
  FaTwitter,
} from "react-icons/fa";


import { useDispatch, useSelector } from "react-redux";
import { fetechBlog } from "../features/blogData/blogSlicer"; // Named import
import { StorageLink } from "../components/apiLink";
import Link from "next/link";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();
  const {
    data: bloglink,
    status,
    error,
  } = useSelector((state) => state.bloglink);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetechBlog());
    }
  }, [status, dispatch]);

  const currentBlogs = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div className="et_pb_module et_pb_fullwidth_image et_pb_fullwidth_image_0">
        <img src="/images/infosectrain-Blog-2023.webp" alt="blog-banner" width="100%" loading="lazy" />
      </div>

      <div className="blog-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-9">
              <header className="page-header">
                <h1 className="page-title">Infosectrain Blog</h1>
              </header>

              <div className="container card-blog">
                <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-5">
                  {bloglink.map((blog, index) => (
                    <div key={index} className="col">
                      <div className="blog-card shadow-lg h-100">
                        <img
                          className="card-img-top"
                          src={`${StorageLink}/${blog.img}`}
                          alt=""
                        />
                        <div className="blog-card-body">
                          <div
                            className={`d-flex justify-content-between align-items-cente ${
                              (index + 1) % 2 === 0 ? "dg-bg2" : "bg-gradient12"
                            } position-relative text-white py-2 rounded-pill px-3 mb-3`}
                            style={{ top: "-50px" }}
                          >
                            <p className="mb-0 d-flex align-items-center gap-2">
                              <FaTag />
                              {blog.subhead}
                            </p>
                            <p className="">
                              <FaClock /> {formatDate(blog.date)}
                            </p>
                          </div>
                          <Link href="/blog-inner">
                            {" "}
                            <h2 className="blog-card-title mb-3">
                              {blog.heading}
                            </h2>
                          </Link>
                          <p
                            className="text-dark border-bottom pb-3"
                            dangerouslySetInnerHTML={{
                              __html: blog.description,
                            }}
                          ></p>

                          {/* <div className="share-blog d-flex mt-3 text-muted align-items-center gap-3">
                            <Link href="" className="text-lg">
                              Shares
                            </Link>
                            <Link
                             href =""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFacebook />
                            </Link>
                            <Link
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaTwitter />
                            </Link>
                            <Link
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin />
                            </Link>
                            <Link
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaEnvelope />
                            </Link>
                            <Link
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFacebookMessenger />
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <nav className="navigation pagination" aria-label="Posts">
                <h2 className="screen-reader-text">Posts navigation</h2>
                <div className="nav-links">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <span
                      key={index}
                      className={`page-numbers ${
                        currentPage === index + 1 ? "current" : ""
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      <span className="meta-nav screen-reader-text"> </span>
                      {index + 1}
                    </span>
                  ))}
                  <Link
                    className="next page-numbers"
                    onClick={() =>
                      paginate(
                        currentPage < totalPages ? currentPage + 1 : currentPage
                      )
                    }
                    href="#"
                  >
                    <span className="screen-reader-text">Next</span>
                  </Link>
                </div>
              </nav>
            </div>

            {/* <div className="col-xs-12 col-md-3 ">
              <Left />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
