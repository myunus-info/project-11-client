import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-part">
      <div className="container px-lg-0">
        <div className="row">
          <div className="contact-top text-center">
            <h5>Contact</h5>
            <h2>
              Let us handle your
              <span className="d-block">project professionally</span>
            </h2>
          </div>
          <div className="col-lg-3 offset-3">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="col-lg-3">
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="col-lg-3 offset-3">
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
          </div>
          <div className="col-lg-3">
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
            />
          </div>
          <div className="col-lg-6 offset-3">
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="form-control"
              style={{ resize: "none" }}
            ></textarea>
            <input
              style={{ margin: "0 auto" }}
              type="submit"
              value="Send Message"
              className="button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
