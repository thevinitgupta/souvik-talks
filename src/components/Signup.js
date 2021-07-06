import React, { useState } from 'react';
import firebase from "../config/firebase";
import 'firebase/firestore';

function Signup() {

    const [isAdmin,setIsAdmin] = new useState(false);
    const [adminPassword,setAdminPassword] = new useState("");

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

    return (
        <div className="signup__page">
          {isAdmin ? 
          //if checked is admin, allow Google Signup
          <div className="signup__page__with__google">
            <span>Sign Up as Admin:</span>
            <div className="signup__page__with__google__btn">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google icon" className="google__icon"/><span>Sign Up With Google</span> 
            </div>
          </div> 
          :
          //if not confirmed admin password
          <div className="signup__page__admin">
            <div className="check__admin__form" method="POST">
                <label htmlFor="admin__password" name="admin__label">Enter Admin Password :</label>
                <input id="admin__password" value={adminPassword} type="password" placeholder="admin password" onChange={handleAdminPasswordChange}></input>
                <button type="button" onClick={handleAdminPassword}>Submit</button> 
            </div>
          </div>
          }  
        </div>
    )
}

export default Signup
