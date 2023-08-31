import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInputs from "../components/CustomInputs";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="signup-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-20">
                <CustomInputs
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                />
                <CustomInputs
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                />
                <CustomInputs type="email" name="email" placeholder="Email" />
                <CustomInputs
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <CustomInputs
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex align-items-center justify-content-center gap-20">
                    <button className="button border-0 ">Create</button>
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

export default SignUp;
