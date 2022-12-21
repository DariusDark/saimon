import React, { useEffect, useState } from "react";
import Layout from "../../_components/Layout";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { NavLink } from "react-router-dom";
import { Header } from "../../_components/Header";

import ARROW_RIGHT from "../../_assets/contact-us/arrows-right.svg";

import "./contact-us.css";

const ContactUs = () => {
  useDocumentTitle("Saimon | Contact Us");
  const STATIC_TEXT = "your message: ";
  const [message, setMessage] = useState(STATIC_TEXT);

  const handleChange = (event) => {
    const { value } = event.target;
    const dynamicText = value.split(STATIC_TEXT)[1];
    if (dynamicText) {
      setMessage(STATIC_TEXT + dynamicText);
    } else {
      setMessage(STATIC_TEXT);
    }
  };

  return (
    <Layout>
      <div className="column contact-us__container">
        <section className="contact-us">
          <Header />
          <div className="row contact-us--gap">
            <div className="contact-us__content">
              <h1 className="row contact-us__title">
                <span>Contact us</span>
                <span className="row">
                  <img
                    className="contact-us__title-icon"
                    src={ARROW_RIGHT}
                    alt="arrows-right"
                  />
                </span>
              </h1>
              <p className="contact-us__description">
                Lorem ipsum dolor sit amet consectetur. Ut dui volutpat at sit
                molestie vitae aliquet tortor. Proin auctor nibh enim nulla
                faucibus eget posuere sed. Eget cras cursus rhoncus amet turpis
                elementum viverra.
              </p>
              <div className="contact-us__information">
                <div className="row contact-us__information--wrap">
                  <div className="column contact-us__information-body">
                    <div className="contact-us__information-item">
                      <div className="column contact-us__email--gap">
                        <p className="contact-us__information-title">email</p>
                        <a
                          className="contact-us__information-text contact-us__email-link"
                          href="mailto:email@example.com"
                        >
                          email@example.com
                        </a>
                      </div>
                    </div>
                    <div className="contact-us__information-item">
                      <div className="column contact-us__phone--gap">
                        <p className="contact-us__information-title">phone</p>
                        <a
                          className="contact-us__information-text contact-us__phone-link"
                          href="tel:(555)555-5555"
                        >
                          (555) 555-5555
                        </a>
                      </div>
                    </div>
                    <div className="contact-us__information-item">
                      <div className="column contact-us__information--gap">
                        <p className="contact-us__information-title">adress</p>
                        <p className="contact-us__information-text">
                          123 Demo StreetNew York, NY 12345
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column contact-us__information-body">
                    <div className="contact-us__information-item">
                      <div className="column contact-us__email--gap">
                        <p className="contact-us__information-title">email</p>
                        <a
                          className="contact-us__information-text contact-us__email-link"
                          href="mailto:email@example.com"
                        >
                          email@example.com
                        </a>
                      </div>
                    </div>
                    <div className="contact-us__information-item">
                      <div className="column contact-us__phone--gap">
                        <p className="contact-us__information-title">phone</p>
                        <a
                          className="contact-us__information-text contact-us__phone-link"
                          href="tel:(555)555-5555"
                        >
                          (555) 555-5555
                        </a>
                      </div>
                    </div>
                    <div className="contact-us__information-item">
                      <div className="column contact-us__information--gap">
                        <p className="contact-us__information-title">adress</p>
                        <p className="contact-us__information-text">
                          123 Demo StreetNew York, NY 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-us__form-container">
              <span className="contact-us__form-background"></span>
              <form className="contact-us__form">
                <h3 className="contact-us__form__title">
                  Do you want to ask a question?
                </h3>
                <div className="row contact-us__form--wrap">
                  <div className="row contact-us__input-container">
                    <label htmlFor="name" className="contact-us__input-label">
                      your name:
                    </label>
                    <input
                      id="name"
                      className="input contact-us__input"
                      type="text"
                    />
                  </div>
                  <div className="row contact-us__input-container">
                    <label htmlFor="email" className="contact-us__input-label">
                      your email:
                    </label>
                    <input
                      id="email"
                      className="input contact-us__input"
                      type="text"
                    />
                  </div>
                </div>
                <div className="contact-us__textarea-container">
                  <textarea
                    onChange={handleChange}
                    value={message}
                    id="message"
                    className="input contact-us__textarea"
                    rows="4"
                  ></textarea>
                  <label
                    className="contact-us__textarea-label"
                    htmlFor="message"
                  >
                    your message:
                  </label>
                </div>
                <div className="row contact-us__actions">
                  <button type="submit" className="contact-us__button">
                    send &#10230;
                  </button>
                  <div className="row contact-us__check-container">
                    <input
                      className="contact-us__checkbox"
                      id="checkbox"
                      type="checkbox"
                    />
                    <label
                      htmlFor="checkbox"
                      className="contact-us__check-label"
                    >
                      I give my consent to the processing of personal data and
                      privacy policy
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className="contact-us__footer">
          <div className="row contact-us__footer__container contact-us__footer--gap">
            <span className="contact-us__footer-copyright">
              Copyright 2022 Qtum Labs
            </span>
            <nav className="row contact-us__footer--gap">
              <NavLink to="/" className="nav-link contact-us__footer-nav-link">
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className="nav-link contact-us__footer-nav-link"
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link contact-us__footer-nav-link"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact-us"
                className="nav-link contact-us__footer-nav-link"
              >
                Contact Us
              </NavLink>
            </nav>
            <div className="contact-us__policy">
              <div className="row contact-us__footer--gap">
                <a className="contact-us__policy-link" href="#">
                  privacy policy
                </a>
                <a className="contact-us__offer-link" href="#">
                  offer
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default ContactUs;
