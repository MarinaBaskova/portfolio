import React from "react";
import socialAccounts from "../data/socialAccounts";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="section" id="contact-section">
        <h2>Contact</h2>
      </div>

      <div className="contact-icon-wrapper">
        <a className="contact-link" href="mailto:marinabaskova24@gmail.com">
          <i className="far fa-envelope"></i>
        </a>
        <a className="contact-link" href={socialAccounts[0].profileURL}>
          <i className="fab fa-github-alt"></i>
        </a>
        <a className="contact-link" href={socialAccounts[1].profileURL}>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
