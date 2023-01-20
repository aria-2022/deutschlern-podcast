import React from 'react'

function Signup() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-colum-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl">Create Account</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn">Sign Up</button>
        </div>
{/* how to link a href to SignUp page? */}
        <p className="py-2 label-text-alt">Aleady have an account?</p>
        <a href="#" className="label-text-alt link link-hover">Login</a>

      </div>
    </div>
  </div>
</div>
  )
}

export default Signup