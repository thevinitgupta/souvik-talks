import React, { useContext,useState } from 'react';
import firebase from "../config/firebase";
import { AuthContext } from "../context/userContext";
import { Redirect } from "react-router-dom";
import 'firebase/firestore';
import "../css/Signup.css";
import Blogging from "../images/blogging.png"
import Security from "../images/security.png"

function Signup() {

    const [isAdmin,setIsAdmin] = useState(false);
    const [adminPassword,setAdminPassword] = new useState("");

    //get the user state from the context
  const { user } = useContext(AuthContext);
  var provider = new firebase.auth.GoogleAuthProvider(); 

  //this is our config for FirebaseAuth
  

    function handleAdminPasswordChange(event){
        setAdminPassword(event.target.value);
    }

    //function to check the admin password
    function handleAdminPassword(event){
        const db = firebase.firestore();
        const adminRef = db.collection("Admin").doc("Password");
        adminRef.get().then((doc) => {
            if (doc.exists) {
                const docVal = doc.data();
                console.log("Document data:", docVal.value);
                console.log("Event data :",adminPassword,typeof adminPassword);
                if(docVal.value===adminPassword){
                    console.log("password matched!")
                    setIsAdmin(true);
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        
    }

    function handleGoogleSignIn(){
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    //var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    // var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    // var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    console.error(errorMessage)
    // ...
  });
    }

    return (
        <div className="signup__page">
          {user ? (
            <Redirect to={{ pathname: "/" }} />
            ) 
            : 
            isAdmin ? 
          //if checked is admin, allow Google Signup
          (<div className="signup__page__with__google">
          <div className="check__admin__img">
                <img src={Blogging} alt="security"/>
              </div>
            <span className="signup__page__with__google__head">Sign Up as Admin:</span>
            <div className="signup__page__with__google__btn" onClick={handleGoogleSignIn}>
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google icon" className="google__icon"/><span>Sign Up With Google</span> 
            </div>
          </div> 
          
          )
          :
          //if not confirmed admin password
          (<div className="signup__page__admin">
            <div className="check__admin__img">
                <img src={Security} alt="security"/>
              </div>
            <div className="check__admin__form">
              
                <label htmlFor="admin__password" name="admin__label">Enter Admin Password</label>
                <input id="admin__password" value={adminPassword} type="password" placeholder="admin password" onChange={handleAdminPasswordChange}></input>
                <button type="button" onClick={handleAdminPassword}>Submit</button> 
            </div>
          </div>)
          } 
          <div className="login__page__redirect">
            <span>Already Signed Up as Admin? <a href="/login">Login </a></span>
          </div> 
        </div>
    )
}

export default Signup
