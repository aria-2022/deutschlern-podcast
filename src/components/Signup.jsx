import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const {users, setUsers } = useContext(AppContext);

  function submitHandler(e) {
    e.preventDefault();

    let foundUser = users.find((i) => i.email == e.target.email.value);
    if (foundUser) {
      alert("Benutzer ist vorhanden");
      navigate("/login");
    } else {
      axios.post("https://podcast-app-api.onrender.com/user", {
        name: e.target.name.value,
        password: e.target.password.value,
        email: e.target.email.value,
        subscriber: false,
      });
      axios("https://podcast-app-api.onrender.com/user").then((i) => setUsers(i.data));
      alert("Ein Benutzer wurde erstellt.");

      navigate("/login");
    }
  }

  return (
    <>
      <div className="hero-content hero min-h-screen flex-col lg:flex-colum-reverse">
        <h1 className="text-5xl font-bold text-center">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning relative inline-block">
            <span class="relative text-white">Create Account</span>
          </span>
        </h1>
        {/* <h1 className="text-3xl">Create Account</h1> */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={submitHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="vollständiger Name"
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
                  Passwort vergessen?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Signup</button>
            </div>
            <p className="py-2 label-text-alt">Sie haben bereits ein Konto?</p>
            <Link to="/login" className="label-text-alt link link-hover">
              Login
            </Link>
          </form>
        </div>
      </div>
      <br />
    </>
  );
}

export default Signup;
