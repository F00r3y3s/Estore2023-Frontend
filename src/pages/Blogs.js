import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blogs = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper02 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3 ">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watches</li>
                  <li>Tv's</li>
                  <li>Cameras</li>
                  <li>Laptops</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
              <div className="col-6 mb-3 ">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;