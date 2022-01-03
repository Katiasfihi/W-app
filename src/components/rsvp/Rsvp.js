import React, { useEffect, useState, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useMediaQuery } from "@react-hook/media-query";
import { Translation } from "react-i18next";

import Navigation from "../navigation/Navigation";

import "../rsvp/Rsvp.scss";

function Rsvp() {
  const form = useRef();
  const history = useHistory();
  const isMobile = useMediaQuery("only screen and (max-width: 992px)");
  const [isAttending, setIsAttending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <Translation>
      {(t) => (
        <div className="rsvp">
          <Navigation noBurger hideNavList isMobile={isMobile} />
          <Link to="/">
            <h1 className="katia">Katia & Carol</h1>
          </Link>
          <div className="rsvp__content">
            <h2 className="rsvp__title">
              {t(`rsvp_title`)} <br></br> {t(`rsvp_title_2`)}
            </h2>
            <Formik
              initialValues={{
                email: "",
                surname: "",
                name: "",
                attendance: "",
                car: "",
              }}
              onSubmit={sendEmail}
              validationSchema={Yup.object().shape({
                name: Yup.string().required(t(`rsvp_error_name`)),
                surname: Yup.string().required(t(`rsvp_error_surname`)),
                attendance: Yup.string().required(t(`rsvp_error_attendance`)),
                car: isAttending && Yup.string().required(t(`rsvp_error_car`)),
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

                if (values.attendance === "yes") {
                  setIsAttending(true);
                }

                return (
                  <form onSubmit={handleSubmit} ref={form}>
                    <label htmlFor="name" style={{ display: "block" }}>
                      {t(`rsvp_first_name`)}*
                    </label>
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )}
                    <input
                      id="name"
                      name="name"
                      placeholder={t(`rsvp_error_name_placeholder`)}
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
                    {/* {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )} */}
                    <label htmlFor="surname" style={{ display: "block" }}>
                      {t(`rsvp_last_name`)}*
                    </label>

                    {errors.surname && touched.surname && (
                      <div className="input-feedback">{errors.surname}</div>
                    )}
                    <input
                      id="surname"
                      name="surname"
                      placeholder={t(`rsvp_error_surname_placeholder`)}
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
                    {/* {errors.surname && touched.surname && (
                      <div className="input-feedback">{errors.surname}</div>
                    )} */}
                    <label htmlFor="email" style={{ display: "block" }}>
                      {t(`rsvp_email`)}
                    </label>

                    <input
                      id="email"
                      name="email"
                      placeholder={t(`rsvp_error_email_placeholder`)}
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

  {errors.attendance && touched.attendance && (
                        <div className="input-feedback">
                          {errors.attendance}
                        </div>
                      )}
                    <div role="group" aria-labelledby="rsvp-radio-group">
                      <p> {t(`rsvp_confirmation`)}*</p>
                      <label>
                        <div className="rsvp__radio-label">
                          <Field
                            type="radio"
                            name="attendance"
                            value="yes"
                            className="rsvp__radio-button"
                          />
                          <span>{t(`rsvp_confirmation_yes`)}</span>
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
                          <span>{t(`rsvp_confirmation_nope`)}</span>
                        </div>
                      </label>
                      {/* {errors.attendance && touched.attendance && (
                        <div className="input-feedback">
                          {errors.attendance}
                        </div>
                      )} */}
                    </div>

                    {errors.car && touched.car && (
                          <div className="input-feedback">{errors.car}</div>
                        )}
                    {isAttending && (
                      <div role="group" aria-labelledby="rsvp-radio-group">
                        <p>{t(`rsvp_car`)}*</p>
                        <label>
                          <div className="rsvp__radio-label">
                            <Field
                              type="radio"
                              name="car"
                              value="yes"
                              className="rsvp__radio-button"
                            />
                            <span> {t(`rsvp_car_yes`)}</span>
                          </div>
                        </label>
                        <label>
                          <div className="rsvp__radio-label">
                            <Field
                              type="radio"
                              name="car"
                              value="no"
                              className="rsvp__radio-button"
                            />
                            <span> {t(`rsvp_car_nope`)}</span>
                          </div>
                        </label>
                        {/* {errors.car && touched.car && (
                          <div className="input-feedback">{errors.car}</div>
                        )} */}
                      </div>
                    )}

                    <label for="message">{t(`rsvp_message`)}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="15"
                      cols="50"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t(`rsvp_message_placeholder`)}
                    />

                    <div className="rsvp__submit-wrapper">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-rsvp"
                      >
                        {t(`rsvp_submit`)}
                      </button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}
    </Translation>
  );
}
export default Rsvp;
