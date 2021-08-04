import React, { useContext,} from "react";
//import "./Login.css"
import { signInWithGoogle } from "../config/firebase";
import { UserContext } from "../context/userContext";
export default function Login() {
    const user = useContext(UserContext)
    console.log(user)
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
        </button>
      </div>
  );
}