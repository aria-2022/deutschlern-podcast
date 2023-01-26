import axios from "axios";
import React from "react";
const Contactus = () => {
  const [formStatus, setFormStatus] = React.useState("Senden");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Einreichen...");

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    console.log(name, email, message);
    axios.post("http://localhost:3000/contact", { name, email, message });
  };
  return (
    <>
      <div className="hero-content hero min-h-screen flex-col lg:flex-colum-reverse">
        <h1 className="text-5xl font-bold text-center">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning relative inline-block">
            <span class="relative text-white">Kontakt</span>
          </span>
        </h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={onSubmit} className="card-body">
            <div className="mb-3 form-control">
              <label className="form-label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                className="form-control input input-bordered"
                type="text"
                placeholder="full name"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="mb-3 form-control">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control input input-bordered"
                placeholder="email"
                type="email"
                id="email"
                required
                name="email"
              />
            </div>
            <div className="mb-3 form-control">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control input input-bordered"
                placeholder="input text"
                type="text"
                id="message"
                name="message"
                required
              />
            </div>
            <button className="btn btn-danger" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contactus;
