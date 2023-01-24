import React from "react";
const Contactus = () => {
  const [formStatus, setFormStatus] = React.useState("Senden");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <>
      <div className="hero-content hero min-h-screen flex-col lg:flex-colum-reverse">
        <h1 className="mb-3 text-3xl text-center">Kontakt</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={onSubmit} className="card-body">
            <div className="mb-3 form-control">
              <label className="form-label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                className="form-control input input-bordered"
                type="name"
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
              />
            </div>
            <div className="mb-3 form-control">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control input input-bordered"
                placeholder="input text"
                type="message"
                id="message"
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
