import React, { useContext, useEffect, useState } from 'react'
import Social from './Social'
import "../css/HamburgerMenu.css"
import { AuthContext } from '../context/userContext';
import firebase from 'firebase';

function HamburgerMenu() {
    const {user} = useContext(AuthContext);
    const [loggedIn,setLoggedIn] = useState(false);
    const [hamburgerMenuOpen,setHamburgerMenuOpen] = useState(false);
    useEffect(() => {
        if(user) setLoggedIn(true);
        else setLoggedIn(false);
    }, [user])
    function handleSignOut(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            toggleMenu();
            alert("You have been Signed Out!")
            window.location = "/";
          }).catch((error) => {
            // An error happened.
          });
    }

    function toggleMenu(){
        setHamburgerMenuOpen((prevVal)=>{
            return !prevVal;
        })
    }
    return (
        <div className="hamburgerMenu">
            <div className={hamburgerMenuOpen ?  "hamburgerMenu__btn hamburgerMenu__btn__clicked" : "hamburgerMenu__btn"} onClick={toggleMenu}>
                <div className="hamburgerMenu__btn__top"></div>
                <div className={hamburgerMenuOpen ?  "hamburgerMenu__btn__mid hamburgerMenu__hidden" : "hamburgerMenu__btn__mid"}></div>
                <div className="hamburgerMenu__btn__bottom"></div>
            </div>
            <div className={hamburgerMenuOpen ?  "hamburgerMenu__dropdown" : "hamburgerMenu__dropdown hamburgerMenu__hidden"}>
                <Social/>

                <div className="hamburgerMenu__cta" >
                  { loggedIn? 
                    <button className="cta signout__button" onClick={handleSignOut}>Sign Out</button>
                  :
                    <button className="contact_us" onClick={()=> window.location.href="/contact"}>Contact Us</button>
                  }
            </div>
            </div>
            
        </div>
    )
}

export default HamburgerMenu
