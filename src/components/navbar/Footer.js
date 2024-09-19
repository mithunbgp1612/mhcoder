import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-white py-4" style={{ background: '#000000' }}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5>About Us</h5>
            <p>
              MHCode is a platform dedicated to providing high-quality programming tutorials, projects, and IT jobs-related coding resources. Join us to enhance your skills.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#projects" className="text-light">Projects</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5>Contact Us</h5>
            <p>Email: contact@mhcode.com</p>
            <p>Phone: +91 7903047131, 9473176939</p>
            <p>Address: Tilka Manjhi, Bhagalpur, VRMS Complex, 812002</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="row mt-3">
          <div className="col text-center">
            <a href="https://facebook.com" className="text-light me-3"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="https://twitter.com" className="text-light me-3"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://linkedin.com" className="text-light me-3"><i className="fab fa-linkedin fa-2x"></i></a>
            <a href="https://github.com" className="text-light me-3"><i className="fab fa-github fa-2x"></i></a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2024 MHCode. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
