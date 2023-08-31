import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import CustomInputs from "../components/CustomInputs";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="forgot-password-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3  ">
                we will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-20">
                <CustomInputs type="email" name="email" placeholder="Email" />

                <div>
                  <div className="mt-3 d-flex flex-column  align-items-center justify-content-center gap-20 ">
                    <button className="button border-0 " type="submit">
                      Submit
                    </button>

                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
