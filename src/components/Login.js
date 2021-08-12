import React, { useContext,} from "react";
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
  var loggedInUser = result.user;
  const isNewUser = result.additionalUserInfo.isNewUser;
  if(isNewUser){
    //delete user if the user is new
     loggedInUser.delete().then(()=>{
      firebase.auth().signOut().then(() => {
        alert("Please Sign Up as an Admin First!!")
      })
     });
  }
  else {
    window.location = "/";
  }
  
}).catch((error) => {
  var errorMessage = error.message;
  console.error(errorMessage)
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