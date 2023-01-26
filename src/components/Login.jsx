import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { setUser, users } = useContext(AppContext);

  function submitHandler(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(users);

    let foundUser = users.find(
      (i) =>
        i.email == e.target.email.value && i.password == e.target.password.value
    );
    if (foundUser) {
      console.log(foundUser);
      setUser(foundUser);
      navigate("/podcast");
    } else {
      alert("Bitte geben Sie eine gültige E-Mail Adresse an. ");
    }
  }
  return (
    <>
      <div className="hero-content hero min-h-screen flex-col lg:flex-colum-reverse">
        <h1 className="text-5xl font-bold text-center">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning relative inline-block">
            <span class="relative text-white">Login</span>
          </span>
        </h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={submitHandler} className="card-body">
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
                  Passwort vergessen
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Login</button>
            </div>
            <p className="py-2 label-text-alt">Noch kein Konto?</p>
            <Link to="/signup" className="label-text-alt link link-hover">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
