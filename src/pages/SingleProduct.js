import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Colors";
import { IoGitCompareOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 700,
    height: 600,
    zoomWidth: 600,
    img: "https://m.media-amazon.com/images/I/811uRAkduYL._AC_SX679_.jpg",
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/81-2mXw345L._AC_SX679_.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/91RemMq3SnL._AC_SX679_.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/81qV7dmcD1L._AC_SX679_.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71Ak9ghY0VL._AC_SX679_.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids headphones bulk 10 pack multi colored for students
                </h3>
              </div>
              <div className="border-bottom py-3 ">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex align-items-center gap-10 my-2 ">
                  <h3 className="product-heading">Type</h3>
                  <p className="product-data">Smartwatch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2 ">
                  <h3 className="product-heading">Brand</h3>
                  <p className="product-data">Havels</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2 ">
                  <h3 className="product-heading">Categories</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2 ">
                  <h3 className="product-heading">Tags</h3>
                  <p className="product-data">watch, smartwatch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2 ">
                  <h3 className="product-heading">SKU</h3>
                  <p className="product-data">12345</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2 ">
                  <h3 className="product-heading">Availability</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3  ">
                  <h3 className="product-heading">Size</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-3 bg-white text-dark">
                      S
                    </span>
                    <span className="badge border border-3 bg-white text-dark">
                      M
                    </span>
                    <span className="badge border border-3 bg-white text-dark">
                      L
                    </span>
                    <span className="badge border border-3 bg-white text-dark">
                      XL
                    </span>
                    <span className="badge border border-3 bg-white text-dark">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 mb-3 ">
                  <h3 className="product-heading">Color</h3>
                  <Color />
                </div>
                <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3 ">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={50}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5 ">
                    <button className="button border-0 " type="submit">
                      Add to Cart
                    </button>
                    <button className="button border-0  signup">
                      Buy it Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <Link href="">
                      <IoGitCompareOutline className="fs-5 me-2 " />
                      Add to Compare
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <AiOutlineHeart className="fs-5 me-2 " />
                      Add to Wishlist
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-column  gap-10 my-3 ">
                  <h3 className="product-heading">Shipping & Returns:</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all Pakistan domestic orders
                    <b>within 5-10 business days</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10 my-3 ">
                  <h3 className="product-heading">Product Link:</h3>
                  <Link
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://m.media-amazon.com/images/I/811uRAkduYL._AC_SX679_.jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>

            <div className="p-3 bg-white ">
              <p>
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout, and printing in place of English to
                emphasise design elements over content.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="review-wrapper home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end ">
                <div>
                  <h4>Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <Link
                      className="text-dark text-decoration-underline "
                      href="#"
                    >
                      Write a Review
                    </Link>
                  </div>
                )}
              </div>
              <div className="review-form py-4 ">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-20">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="6"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end  ">
                    <button className="button border-0 ">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex align-items-center gap-10">
                    <h6 className="mb-0">SNAK3</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum is a pseudo-Latin text used in web design,
                    typography, layout, and printing in place of English to
                    emphasise design elements over content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
