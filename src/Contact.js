import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import "./css/Contact.css"

function Contact() {
    return (
        <div className="contact">
            <form method="post" className="contact__form">
                <input type="text" placeholder="Your Name" id="name"></input>
                <input type="email" placeholder="Email Id" id="email"></input>
                <textarea placeholder="Your Message" id="message"></textarea>
                <button type="submit" id="send">Send<SendIcon/> </button>
            </form>
        </div>
    )
}

export default Contact
