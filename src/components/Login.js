import React, { useContext,} from "react";
//import "./Login.css"
import firebase from "../config/firebase";
import { AuthContext } from "../context/userContext";
import "../css/Login.css"
import Welcome from "../images/welcome.png";

export default function Login() {
    const user = useContext(AuthContext);
    var provider = new firebase.auth.GoogleAuthProvider(); 

    function handleGoogleSignIn(){
    
      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  //var credential = result.credential;

  // This gives you a Google Access Token. You can use it to access the Google API.
  // var token = credential.accessToken;
  // The signed-in user info.
  var loggedInUser = result.user;
  const isNewUser = result.additionalUserInfo.isNewUser;
  if(isNewUser){
    //delete user if the user is new
     loggedInUser.delete().then(()=>{
      firebase.auth().signOut().then(() => {
        console.log("Signed Out!")
        alert("Please Sign Up as an Admin First!!")
      })
     });
  }
  console.log("is new user :", result.additionalUserInfo.isNewUser)
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
    <div className="login__page">
    
      <div className="login__page__with__google">
      <div className="login__page__image">
        <img src={Welcome} alt="login welcome back"/>
      </div>
        <div className="login__page__with__google__btn" onClick={handleGoogleSignIn}>
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google icon" className="google__icon"/><span>Sign In With Google</span> 
      </div>
      </div>
      <div className="login__page__redirect">
        <span>Not Signed Up as Admin? <a href="/signup">Sign Up</a></span>
      </div> 
    </div>
  );
}