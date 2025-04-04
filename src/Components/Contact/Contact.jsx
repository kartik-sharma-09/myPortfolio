import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin_icon from "../../assets/icons_linkedin.svg";
import github_icon from "../../assets/icons_github.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "876eaf3e-9c9c-405b-8673-62269dda2b2c");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  // const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>
                <a
                  href="mailto:kartik.sharma210210@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kartik.sharma210210@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>
                <a
                  href="tel:9571735535"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9571735535
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <img src={linkedin_icon} alt="LinkedIn Icon" />
              <p>
                <a
                  href="https://www.linkedin.com/in/kartiksharma4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <img src={github_icon} alt="LinkedIn Icon" />
              <p>
                <a
                  href="https://github.com/kartik-sharma-09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Noida</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="Your Name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
