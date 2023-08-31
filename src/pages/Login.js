import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInputs from "../components/CustomInputs";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Log In" />
      <Container class1="login-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Login</h3>
              <form action="" className="d-flex flex-column gap-20">
                <CustomInputs type="email" name="email" placeholder="Email" />
                <CustomInputs
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password ?</Link>
                  <div className="mt-3 d-flex align-items-center justify-content-center gap-20">
                    <button className="button border-0 " type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button border-0  signup">
                      Sign Up
                    </Link>
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

export default Login;
