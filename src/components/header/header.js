import React from "react";
import logo from "../../assets/images/logos.jpeg";
import { Link } from "react-router-dom";
import "./header.css";
import ScrollToTop from "../scrollToTop/scrollToTop";

function Header() {
  return (
    <div className="header">
    <ScrollToTop/>
      <img src={logo} alt="The Full Nelson" />

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <a
              href="https://deliveroo.co.uk/menu/london/saint-johns/the-full-nelson"
              rel="noreferrer"
              target="_blank"
            >
              Order
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
