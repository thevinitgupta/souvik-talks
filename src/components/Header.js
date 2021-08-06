import React, { useContext, useEffect, useState } from 'react';
import Social from "./Social"
import SouvikTalkLogo from "../images/souviktalks.png";
import firebase from "../config/firebase";
import "../css/Header.css";
import { AuthContext } from '../context/userContext';


function Header({scrollToContact}) {
    const {user} = useContext(AuthContext);
    const [loggedIn,setLoggedIn] = useState(false);
    useEffect(() => {
        if(user) setLoggedIn(true);
        else setLoggedIn(false);
    }, [user])
    function handleSignOut(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Signed Out!")
            alert("You have been Signed Out!")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="header">
            <div className="header__logo" onClick={()=> window.location.href="/"}>
                <img src={SouvikTalkLogo} alt="header logo" />
                <div>Souvik Talks</div>
            </div>
            <div className="header__links">
                <Social />
            </div>
            <div className="header__cta" >
                  { loggedIn? 
                    <button className="cta signout__button" onClick={handleSignOut}>Sign Out</button>
                  :
                    <button className="contact_us" onClick={scrollToContact}>Contact Us</button>
                  }
            </div>
        </div>
    )
}

export default Header
