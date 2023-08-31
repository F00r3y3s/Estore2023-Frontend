import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInputs from "../components/CustomInputs";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="reset-password-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-20">
                <CustomInputs
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomInputs
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                />
                <div>
                  <div className="mt-3 d-flex align-items-center justify-content-center gap-20">
                    <button className="button border-0 ">Reset</button>
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

export default ResetPassword;
