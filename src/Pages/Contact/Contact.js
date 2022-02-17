import React, { useState, useRef } from "react";
import "./contact.css";
import Footer from "../../Components/Footer/Footer";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. We will be in touch soon!</p>
  );
};

const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "gmail-pers",
        "template_bg9jjqi",
        "#contact-form",
        "user_crXD0RcAI9mBeLjjK8KMA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    if (!e) {
      console.log("e is null");
    }
    reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="rmnw__contact-wrapper">
      <div className="rmnw__contact_form-container">
        <div className="rmnw__contact_header-container">
          <h1>Now</h1>
          <h2>What can we make for you?</h2>
          <div className="rmnw__contact_paragraph-container">
            <p>
              Our specialist is waiting to answer your questions, and to get the
              ball rolling. Please include any info or questions you might have
              about your order and we will get back to you ASAP!
            </p>
          </div>
        </div>
        <div className="rmnw__contact-form">
          <form id="contact-form" onSubmit={handleSubmit(sendEmail)}>
            <label for="name">
              Enter your name:
              <input
                type="text"
                {...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                })}
                placeholder="Full Name"
                id="name"
              />
              <p>{errors.name?.message}</p>
            </label>
            <label for="email">
              Enter your e-mail address:
              <input
                type="text"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                  minLength: {
                    value: 8,
                    message: "e-mail must be at least 8 characters",
                  },
                })}
                placeholder="E-mail address"
                id="email"
              />
            </label>
            <p>{errors.email?.message}</p>
            <label for="phone">
              Enter your phone number (optional):
              <input
                type="text"
                {...register("phone", {
                  required: false,
                  minLength: {
                    value: 10,
                    message: "please enter a valid phone number",
                  },
                })}
                placeholder="Phone number"
                id="phone"
              />
              <p>{errors.phone?.message}</p>
            </label>
            <label for="message">
              Tell us how we can help you : <br /> (type of service(s) required,
              product dimensions, etc.)
              <textarea
                rows="4"
                {...register("message", {
                  required: {
                    value: true,
                    message:
                      "Please include a description of your order to use this form",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Your message can't exceed 1,000 characters",
                  },
                })}
                placeholder="Message"
                id="message"
              ></textarea>
            </label>
            <label for="attachment">
              Attach a file (optional):
              <input
                type="file"
                {...register("attachment", {
                  required: false,
                })}
                placeholder="Attach image here"
                id="attachment"
              />
            </label>

            <button type="submit" className="rmnw__form-submit-button">
              Submit
            </button>
            <div className="row">{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>

      <div className="rmnw__contact_button-container">
        <div className="rmnw__contact_button-header">
          <h1>Need help deciding?</h1>
          <h2> let's figure it out together</h2>
        </div>
        <div className="rmnw__contact-phone c1">
          <i className="fas fa-phone"></i>
          <a className=" rmnw__contact_phone-button" href="tel:4252599236">
            <p>(425) 259-9236</p>
          </a>
        </div>
        {/*<button type="button" onClick={}></button>*/}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
