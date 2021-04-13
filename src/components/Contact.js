import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import "../css/Contact.css"

function Contact() {
    return (
        <div className="contact">
            <form action="#" className="contact__form">
                <input type="text" placeholder="Your Name" id="name" autoComplete="false"></input>
                <input type="email" placeholder="Email Id" id="email" autoComplete="false"></input>
                <textarea placeholder="Your Message" id="message" autoComplete="false" au rows="5" cols="50"></textarea>
                <button type="submit" id="send">Send<SendIcon/> </button>
            </form>
        </div>
    )
}

export default Contact
