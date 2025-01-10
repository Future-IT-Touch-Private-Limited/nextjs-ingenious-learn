"use client"
import React, { useEffect } from "react";

import Left from "./Left";


const BlogInner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="et_pb_module et_pb_fullwidth_image et_pb_fullwidth_image_0">
        <img src="/images/infosectrain-Blog-2023.webp" alt="blog-banner" width="100%" loading="lazy" />
      </div>

      <div className="blog-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-9">
              <header className="page-header">
                <h1 className="page-title">Infosectrain Blog</h1>
              </header>

              <div className="container card-blog">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div className="w-100 sm:w-90 lg:w-80 rounded shadow-sm my-2">
                    <div className="img-box">
                      <img
                        className="rounded shadow w-100"
                        src="/images/blog-dg-1.webp"
                        alt="Blog"
                      />
                    </div>
                    <div className="icon-div gap-3 d-flex mt-4 px-2">
                      <div className="d-flex align-items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="text-primary"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"></path>
                        </svg>
                        <span className="ml-2 text-muted">Node js</span>
                      </div>
                      <div className="d-flex align-items-center ml-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="text-primary"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32z"></path>
                        </svg>
                        <span className="ml-2 text-muted">Sep 24, 2019</span>
                      </div>
                    </div>
                    <div className="content-box px-2">
                      <h1 className="h5 font-weight-bold py-2 text-dark">
                        Everything You Need To Know About Nodejs!
                      </h1>
                      <p className="text-muted my-1">
                        Node.js is an open-source, cross-platform, back-end
                        JavaScript runtime environment that runs on the V8
                        engine and executes JavaScript code outside a web
                        browser. It was designed to build scalable network
                        applications.
                      </p>
                      <hr />
                    </div>
                    <div className="description px-2 text-muted my-2">
                      <p className="my-2">
                        Node.js allows developers to use JavaScript to write
                        server-side code, making it easier to create real-time
                        web applications and APIs. Its non-blocking,
                        event-driven architecture makes it efficient and
                        suitable for data-intensive applications.
                      </p>
                      <p className="my-2">
                        One of the key features of Node.js is its package
                        manager, npm, which is the largest software registry. It
                        allows developers to share and reuse code, making
                        development faster and more efficient.
                      </p>
                      <p className="my-2">
                        Node.js has a large and active community, with a vast
                        ecosystem of libraries and frameworks, such as
                        Express.js, that simplify development. Its versatility
                        and performance have made it a popular choice for modern
                        web development.
                      </p>
                    </div>
                  </div>
                  <div className="entry-content mt-5">
                <div className="privacy_details">
                  <p>
                    At KnowledgeHut, we have flexible partnership programs that
                    are ideal for IT software resellers, training organisations,
                    trainers and software institutions who wish to seek business
                    growth. If you are interested in expanding your product
                    portfolio instantly, and increasing your revenues
                    multi-fold, then you are at the right place!
                  </p>

                  <p className="mt-5">
                    <strong>BECOME A CHANNEL PARTNER</strong>
                  </p>
                  <p>
                    We offer a diverse product portfolio with courses delivered
                    by trainers who have industry experience and a passion for
                    sharing their knowledge. Our delivery methods are flexible
                    and combine face-to-face classroom and virtual training
                    sessions, ensuring that your customers get training suited
                    to their learning style, needs, location and budget.
                  </p>
                  <ul>
                    <li>Boost your product portfolio</li>
                    <li>Give your sales and sales margins an added impetus</li>
                    <li>Create incremental and recurring revenue</li>
                    <li>
                      Eliminate the need for your sales force to become training
                      experts, as our managers are there to help!
                    </li>
                    <li>Exponentially increase client satisfaction</li>
                    <li>
                      Achieve quick-to-market results with minimal investment
                    </li>
                  </ul>
                  <p>
                    <strong>PARTNER PROGRAMS</strong>
                  </p>

                  <p>
                    The KnowledgeHut Partner Program constitutes two important
                    pillars in the partner portfolio: the Referral Partner and
                    Reseller Partner. You can opt for one that suits your
                    preference:
                  </p>
                </div>
              </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-3">
              <Left />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInner;
