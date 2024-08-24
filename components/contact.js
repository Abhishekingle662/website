import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-heading text-center">
        <h2 style={{ color: '#5C5552' }}>Contact Me</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12">
              <div className="single-contact-box">
                <div className="contact-adress">
                  <div className="contact-add-info">
                    <div className="single-contact-add-info">
                      <h3>Email</h3>
                      <p>abhishekingle662@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="hm-foot-icon">
                  <ul>
                    <li><a href="https://www.facebook.com/abhishek.ingle.988"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://github.com/Abhishekingle662"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://twitter.com/Abhishe55498479"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/abhishek-ingle/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/ingle_.abhishek._/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
