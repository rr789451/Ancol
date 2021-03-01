import React from "react"
import SocialLinks from "../constants/socialLinks"
import logo from "./logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} />
        <div>
          <SocialLinks styleClass="footer-links"></SocialLinks>
        </div>
      </div>
      <ul className="footer-right">
        <li className="move-down">
          <h2>Quick Links</h2>
          <ul className="box">
            <li>
              <a href="https://nptel.ac.in/">NPTEL</a>
            </li>
            <li>
              <a href="https://swayam.gov.in/">Swayam</a>
            </li>
          </ul>
        </li>

        <li>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.789275758049!2d92.73970971463096!3d11.638360191740205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308895aaf5283621%3A0x6b4cb726447e66d7!2sANCOL!5e0!3m2!1sen!2sin!4v1612448552640!5m2!1sen!2sin"
            width="314"
            height="216"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </li>

        <li>
          <h2>Contact Us</h2>
          <ul className="box">
            <li>
              <a href="#">Andaman College</a>
            </li>
            <li>
              <a href="#">Port Blair</a>
            </li>
            <li>
              <a href="tel:03192-235506">03192-235506</a>
            </li>
            <li>
              <a href="tel:03192-235507">03192-235507</a>
            </li>
            <li>
              <a href="mailto:ancol.andaman@gmail.com">
                ancol.andaman@gmail.com
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="footer-bottom">
        <p>
          CREATED BY MECS STUDENTS [1608-18-733-067, 1608-18-733-073, 1608-18-733-075]
        </p>
      </div>
    </footer>
  )
}

export default Footer
