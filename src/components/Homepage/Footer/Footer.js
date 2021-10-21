import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-part">
      <div className="container px-lg-0">
        <div className="row">
          <div className="col-lg-4 location">
            <h3>Our Location</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="ms-2">
                H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </span>
            </p>
          </div>
          <div className="col-lg-2 company">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Project</li>
              <li>Our Team</li>
              <li>Terms &amp; Conditions</li>
              <li>Submit Listing</li>
            </ul>
          </div>
          <div className="col-lg-2 links">
            <h3>Quick Links</h3>
            <ul>
              <li>Quick Links</li>
              <li>Rentals</li>
              <li>Sales</li>
              <li>Contact</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div className="col-lg-4 about">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{' '}
            </p>
            <ul className="d-flex">
              <li>
                <a href="https://www.facebook.com/" className="social-icons">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="social-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="social-icons">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="social-icons">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p
        style={{
          backgroundColor: '#1f1753',
          padding: '15px 0',
          marginTop: '35px',
          color: 'rgba(255, 255, 255, 0.7)',
        }}
        className="text-center"
      >
        Copyright &copy; {new Date().getFullYear()} All right reserved
      </p>
    </footer>
  );
};

export default Footer;
