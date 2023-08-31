import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.webp";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3  d-flex align-items-center justify-content-between ">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data mb-2  py-3  d-flex align-items-center justify-content-between ">
              <div className="cart-col-1 d-flex align-items-center gap-20 ">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product img" />
                </div>
                <div className="w-75">
                  <p>wwee</p>
                  <p>Size: ddff</p>
                  <p>Color: gghh</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex gap-20 align-items-center ">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    min={1}
                    max={50}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <RiDeleteBin5Fill className="fs-3 text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100</h5>
              </div>
            </div>
            <div className="cart-data mb-2  py-3  d-flex align-items-center justify-content-between ">
              <div className="cart-col-1 d-flex align-items-center gap-20 ">
                <div className="w-25">
                  <img src={watch2} className="img-fluid" alt="product img" />
                </div>
                <div className="w-75">
                  <p>wwee</p>
                  <p>Size: ddff</p>
                  <p>Color: gghh</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex gap-20 align-items-center ">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    min={1}
                    max={50}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <RiDeleteBin5Fill className="fs-3 text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4 ">
            <div className="d-flex justify-content-between align-items-baseline  ">
              <Link to="/product" className="button">
                Continue Shopping
              </Link>
              <div className="d-flex flex-column align-items-end ">
                <h4>Subtotal: $ 200</h4>
                <p>Tax and Shipping will be calculated at Checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
