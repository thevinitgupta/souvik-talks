import React from 'react';
import "./css/Header.css";
import Social from "./Social"


function Header() {
    return (
        <div className="header">
          <div className="header__logo">
              <img src="https://www.blogger.com/img/logo_blogger_40px.png" alt="header logo"/>
              <div>Souvik Talks</div>
          </div>
          <div className="header__links">
              <Social />
          </div>
          <div className="header__cta">
              <button className="contact_us">Contact Us</button>
          </div>
        </div>
    )
}

export default Header