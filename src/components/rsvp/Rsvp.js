import React, { useRef } from "react";
import { useHistory, Link } from "react-router-dom";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import Navigation from "../navigation/Navigation";

import "../rsvp/Rsvp.scss";

function Rsvp() {
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_u5nlqmi",
        "template_m1qfl9g",
        form.current,
        "user_7Sik7Z8G3mzKbYSyVPBjE"
      )
      .then(() => {
        console.log("it works");
        history.push("/thankyou");
      });
  };

  return (
    <div className="rsvp">
      <Navigation noBurger />
      <Link to="/pages">
        <h1 className="katia">Katia & Carol</h1>
      </Link>
      <div className="rsvp__content">
        <h2 className="rsvp__title">
          We look forward to celebrate our big day with you. <br></br> Please
          confirm your attendance.
        </h2>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={sendEmail}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Please tell us your name"),
            surname: Yup.string().required("Please tell us your surname"),
            attendance: Yup.string().required(
              "Please tell us if you can make it to the event"
            ),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit} ref={form}>
                <label htmlFor="name" style={{ display: "block" }}>
                  First name *
                </label>

                <input
                  id="name"
                  name="name"
                  placeholder="Enter your first name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && !touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <label htmlFor="surname" style={{ display: "block" }}>
                  Last name *
                </label>

                <input
                  id="surname"
                  name="surname"
                  placeholder="Enter your last name"
                  type="text"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.surname && touched.surname
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.surname && !touched.surname && (
                  <div className="input-feedback">{errors.surname}</div>
                )}
                <label htmlFor="email" style={{ display: "block" }}>
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <div role="group" aria-labelledby="rsvp-radio-group">
                  <p>Please tell us if you can make it to the event *</p>
                  <label>
                    <div className="rsvp__radio-label">
                      <Field
                        type="radio"
                        name="attendance"
                        value="yes"
                        className="rsvp__radio-button"
                      />
                      <span>Yes, I will attend</span>
                    </div>
                  </label>
                  <label>
                    <div className="rsvp__radio-label">
                      <Field
                        type="radio"
                        name="attendance"
                        value="no"
                        className="rsvp__radio-button"
                      />
                      <span> No, I will not attend</span>
                    </div>
                  </label>
                  {errors.attendance && !touched.surname && (
                    <div className="input-feedback">{errors.attendance}</div>
                  )}
                </div>

                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="15"
                  cols="50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="In case you want to tell us something"
                />

                <div className="rsvp__submit-wrapper">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-rsvp"
                  >
                    Submit
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
export default Rsvp;
