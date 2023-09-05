import React from "react";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
export default function Signin() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <main>
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                <div className="p-3 p-lg-5">
                  <div className="text-center">
                    <h2 className="fw-bold">
                      Welcome to our largest community
                    </h2>
                    <p className="mb-0 h6 fw-light">
                      Let&rsquo;s learn something new today!
                    </p>
                  </div>
                  <img
                    src="assets/images/element/02.svg"
                    className="mt-5"
                    alt=""
                  />
                  <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                    <ul className="avatar-group mb-2 mb-sm-0">
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/01.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/02.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/03.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/04.jpg"
                          alt="avatar"
                        />
                      </li>
                    </ul>
                    <p className="mb-0 h6 fw-light ms-0 ms-sm-3">
                      4k+ Students joined us, now it's your turn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 m-auto">
                <div className="row my-5">
                  <div className="col-sm-10 col-xl-8 m-auto">
                    <h1 className="fs-2">Login into Eduport!</h1>
                    <p className="lead mb-4">
                      Nice to see you! Please log in with your account.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address / Mobile Number *
                        </label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="bi bi-envelope-fill"></i>
                          </span>
                          <input
                            type="email / number"
                            className="form-control border-0 bg-light rounded-end ps-1"
                            placeholder="E-mail / Mobile Number"
                            id="exampleInputEmail1"
                            {...register("email/number",{required:true})}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="inputPassword5" className="form-label">
                          Password *
                        </label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="fas fa-lock"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control border-0 bg-light rounded-end ps-1"
                            placeholder="password"
                            id="inputPassword5"
                            {...register("password",{required:true})}
                          />
                        </div>
                        <div id="passwordHelpBlock" className="form-text">
                          Your password must be 8 characters at least
                        </div>
                      </div>
                      <div className="mb-4 d-flex justify-content-between mb-4">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="text-primary-hover">
                          <Link to="/forget-password">
                            <u>Forgot password?</u>
                          </Link>
                        </div>
                      </div>
                      <div className="align-items-center mt-0">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary mb-0"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="row">
                      <div className="position-relative my-4">
                        <hr />
                        <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                          Or
                        </p>
                      </div>

                      <div className="col-xxl-6 d-grid">
                        <a href="#" className="btn bg-google">
                          <i className="fab fa-fw fa-google text-white me-2"></i>
                          Login with Google
                        </a>
                      </div>
                      <div className="col-xxl-6 d-grid">
                        <a href="#" className="btn bg-facebook">
                          <i className="fab fa-brands fa-github text-white  me-2"></i>
                          Login with GitHub
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <span>
                        Don't have an account?{" "}
                        <a href="sign-up.html">Signup here</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
