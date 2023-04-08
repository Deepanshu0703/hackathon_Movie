import React from "react";
import "./Footer.css";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer>
      <h3>Follow Us</h3>
      <br />
      <ul className="social-icons">
        <li>
          <a href="#">
            Facebook            
          </a>
        </li>
        <li>
          <a href="#">
            Twitter
          </a>
        </li>
        <li>
            <a href="#">
                Instagram
            </a>
        </li>
        <li>
            <a href="#">
                LinkedIn
            </a>
        </li>
      </ul>
      <br />
      <h6>Copyright © 2021 Movie Recommendations</h6>
    </footer>
  );
}

export default Footer;
