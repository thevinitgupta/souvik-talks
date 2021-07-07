import React from 'react';
import Social from "./Social"
import SouvikTalkLogo from "../images/souviktalks.png";
import firebase from "../config/firebase";
import "../css/Header.css";


function Header({scrollToContact}) {

    function handleSignOut(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Signed Out!")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="header">
          <div className="header__logo" onClick={()=> window.location.href="/"}>
              <img src={SouvikTalkLogo} alt="header logo" />
              <div>Souvik Talks</div>
          </div><button onClick={handleSignOut}>Sign Out</button>
          <div className="header__links">
              <Social />
          </div>
          <div className="header__cta" onClick={scrollToContact}>
              <button className="contact_us">Contact Us</button>
          </div>
        </div>
    )
}

export default Header
