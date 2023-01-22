import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { setUser, data } = useContext(AppContext);

  function submitHandler(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    let foundUser = data.user.find(
      (i) =>
        i.name == e.target.name.value &&
        i.email == e.target.email.value &&
        i.password == e.target.password.value
    );
    if (foundUser) {
      setUser(foundUser);
      navigate("/podcast");
    } else {
      alert("Please enter valid data");
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-colum-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl">Create Account</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={submitHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Sign Up</button>
            </div>
            <p className="py-2 label-text-alt">Aleady have an account?</p>
            <Link to="/login" className="label-text-alt link link-hover">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
