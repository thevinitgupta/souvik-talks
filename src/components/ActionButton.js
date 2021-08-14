import React, { useContext, useEffect, useState } from 'react'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "../css/ActionButton.css"
import { AuthContext } from '../context/userContext';

function ActionButton() {
    const {user} = useContext(AuthContext);
    const [loggedIn,setLoggedIn] = useState(false);
    useEffect(() => {
        console.log(user);
        if(user) setLoggedIn(true);
        else setLoggedIn(false);
    }, [user])
    return (
        <div className={loggedIn? "actionButton add__post" : "actionButton add__user"}>
            {
                loggedIn ?
                
                <NoteAddIcon onClick={()=>{
                    window.location = "/post"
                }} 
                fontSize="large" className="actionButton__icon"/>
                :
                <PersonAddIcon onClick={()=>{
                    window.location = "/login"
                }}
                 fontSize="large" className="actionButton__icon"/>
            }
        </div>
    )
}

export default ActionButton
