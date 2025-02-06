import React from "react";
import footerLogo from "../assets/footer-logo.png";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="footer-links">
          <div className="child-1">
            <p className="footer-header">Product</p>
            <ul className="footer-content">
              <li>
                <a href="#" >Employee database</a>
              </li>
              <li>
                <a href="#" >Payroll</a>
              </li>
              <li>
                <a href="#" >Absences</a>
              </li>
              <li>
                <a href="#" >Time tracking</a>
              </li>
              <li>
                <a href="#" >Shift planner</a>
              </li>
              <li>
                <a href="#" >Recruiting</a>
              </li>
            </ul>
          </div>
          <div className="child-2">
            <p className="footer-header">Information</p>
            <ul>
              <li>
                <a href="#" >FAQ</a>
              </li>
              <li>
                <a href="#" >Blog</a>
              </li>
              <li>
                <a href="#" >Support</a>
              </li>
            </ul>
          </div>
          <div className="child-3">
            <p className="footer-header">Company</p>
            <ul>
              <li>
                <a href="#" >About us</a>
              </li>
              <li>
                <a href="#" >Careers</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="#" >Lift Media</a>
              </li>
            </ul>
          </div>
          <div className="subscribe child-4">
            <p className="footer-header">Subscribe</p>
            <form className="footer-form">
              <input placeholder="Type here..." />
              <button type="submit">
              <img src="./magnigierwhite.svg" alt="zoom" />
              </button>
            </form>
            <p className="footer-text">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </div>
        </div>
        <hr />

        <div className="social">
          <div className="social-links">
            <a href="#fd">Terms</a>
            <a href="#ed">Privacy</a>
            <a href="#de">Cookies</a>
          </div>
          <div className="social-icons">
            <div>
              <a href="https://www.linkedin.com/company/marche-healthcare/" target="_blank" rel="noopener noreferrer"> 
              <img className="f-icon" src="./linked.svg" alt="linkedin"  />
              
              </a>
            </div>
            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer"> 
              <img className="f-icon" src="./facebook.svg" alt="facebook" />
              
              </a>
            </div>
            <div>
              <a href="https://x.com/info_march49738" target="_blank" rel="noopener noreferrer">
              <img className="f-icon" src="./twitter.svg" alt="twitter" />
              
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
