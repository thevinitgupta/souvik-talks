import React, { useContext, useEffect, useState } from 'react'
import Social from './Social'
import "../css/HamburgerMenu.css"
import { AuthContext } from '../context/userContext';
import firebase from 'firebase';

function HamburgerMenu({scrollToContact}) {
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
        <div className="hamburgerMenu">
            <div className="hamburgerMenu__dropdown">
                <Social/>

                <div className="hamburgerMenu__cta" >
                  { loggedIn? 
                    <button className="cta signout__button" onClick={handleSignOut}>Sign Out</button>
                  :
                    <button className="contact_us" onClick={scrollToContact}>Contact Us</button>
                  }
            </div>
            </div>
            
        </div>
    )
}

export default HamburgerMenu
