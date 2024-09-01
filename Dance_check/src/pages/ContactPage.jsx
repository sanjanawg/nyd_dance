import React from "react";
import { Footer, Navbar } from "../components";
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <hr className="mb-5"/>
        <div className="row mb-5">
          <div className="col-md-6">
            <h3 className="text-center">Class Instructors:</h3>
            <p className="text-center mb-4"><strong></strong></p>
            <div className="instructor-info mb-5">
              <div className="d-flex align-items-center mb-4">
                <img
                  src="../assets/nithin2.jpg"
                  alt="Nithin Kumar M"
                  className="img-fluid rounded-circle mr-3 instructor-image"
                />
                <div>
                  <h4>Nithin Kumar M</h4>
                  <p>Phone: 8050579342</p>
                  <p>Email: <a href="mailto:nithin@gmail.com">nithin@gmail.com</a></p>
                  <div className="social-media">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/8050579342" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src="../assets/yuga3.jpg"
                  alt="Yugandhar M"
                  className="img-fluid rounded-circle mr-3 instructor-image"
                />
                <div>
                  <h4>Yugandhar M</h4>
                  <p>Phone: 9686812825</p>
                  <p>Email: <a href="mailto:yugandhar@gmail.com">yugandhar@gmail.com</a></p>
                  <div className="social-media">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/9686812825" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.35716172314!2d77.5806439385725!3d12.89118007396347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157e3a760be9%3A0x123456789abcdef!2sYelachenahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1656689512839!5m2!1sen!2sin"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
