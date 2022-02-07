import React from "react"
import Typical from "react-typical"
import "./contact.css"
import { Heading } from "./Heading/Heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <section
       data-aos="fade-right"
       className="contact"
       name="contact"
       id="contact"
    >
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="left">
        <div className="left-content">
          <Typical
            loop={Infinity}
            wrapper="h3"
           steps={["Get in touch", 1200, "with me", 1200]}
        />
        <p>
            want to get in touch?I'd love to hear from you. Here are
            the platforms you can reach me.
          </p>
        </div>
         <div className="left-content-icons">
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} className="icon" size="4x" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter}  className="icon" size="4x" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} className='icon' size='4x' />  
          </a>
        </div>
      </div>
      <div className="right">
        <img
          src="https://i.ibb.co/hywtn05/solomon-removebg.jpg"
          alt=""
          className=""
        />
      </div>
      </div>
    </section>
  )
}

export default Contact;
