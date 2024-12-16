import "./Feedback.css";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import feedbackImage from "../../assets/SidebarAssets/feedbackImage.png";
import Lottie from "lottie-react";
import feedback from "../../assets/LottieJson/feedbackJson.json";

export default function Feedback() {
  const form = useRef();
  const [formUsername, setFormUsername] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // Regular expressions
  const usernamePattern = /^[A-Za-z][A-Za-z0-9_]{2,14}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ouio0ma", "template_46x6emb", form.current, {
        publicKey: "TG67dbOKSS6vPl2y3",
      })
      .then(
        () => {
          if (!usernamePattern.test(formUsername)) {
            Swal.fire({
              icon: "error",
              title: "Invalid Username 😭",
              text: "Username must be 3-15 characters long and contain only letters, numbers, and underscores.",
            });
          } else if (!emailPattern.test(formEmail)) {
            Swal.fire({
              icon: "error",
              title: "Invalid Email 😭",
              text: "Please enter a valid email address (e.g., text@domain.com).",
            });
          } else if (formMessage.trim() === "") {
            Swal.fire({
              icon: "error",
              title: "Message Required 🚫",
              text: "Please enter a message before submitting.",
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Sent Successfully 👍",
              text: "Thanks for your message!",
            });

            // Clear the form
            setFormUsername("");
            setFormEmail("");
            setFormMessage("");
          }
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Something went wrong ☹️",
            text: error.text,
          });
        }
      );
  };

  return (
    <>
      <div className="container global-animate text-center">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <img src={feedbackImage} alt="Feedback" width={50} />
          <h1 className="global-gradient-heading">Feedback</h1>
        </div>
        <hr />
      </div>

      {/* Feedback container */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <Lottie
              animationData={feedback}
              loop={true}
              style={{ height: "350px", width: "350px" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              autoComplete="off"
              className="d-flex flex-column gap-4"
            >
              {/* Name */}
              <label
                htmlFor="username"
                className="form-label d-flex gap-2 flex-column"
              >
                Name
                <input
                  className="form-control"
                  id="username"
                  type="text"
                  name="from_name"
                  value={formUsername}
                  onChange={(e) => setFormUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </label>
              {/* Email */}
              <label
                htmlFor="email"
                className="form-label d-flex gap-2 flex-column"
              >
                Email
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="from_email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </label>
              {/* Message */}
              <label
                htmlFor="message"
                className="form-label d-flex gap-2 flex-column"
              >
                Message
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={9}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Enter your message"
                />
              </label>
              {/* Submit and Reset Buttons */}
              <div className="d-flex gap-4">
                <input
                  className="global-button rounded-5"
                  type="submit"
                  value="Submit"
                />
                <input
                  className="global-button rounded-5"
                  type="reset"
                  value="Reset"
                  onClick={() => {
                    setFormUsername("");
                    setFormEmail("");
                    setFormMessage("");
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
