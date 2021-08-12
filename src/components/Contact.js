import React, { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com'
import "../css/Contact.css"

function Contact() {

    const [contactName,setContactName ] = useState("");
    const [contactEmail,setContactEmail ] = useState("");
    const [contactMessage,setContactMessage ] = useState("");

    function handleContactName(e){
        setContactName(e.target.value);
    }
    function handleContactEmail(e){
        setContactEmail(e.target.value);
    }
    function handleContactMessage(e){
        setContactMessage(e.target.value);
    }

    function resetContactForm(){
        setContactName("");
        setContactEmail("");
        setContactMessage("");
    }
    function sendEmail(e) {
        e.preventDefault();
        if(contactEmail ==="" || contactName==="" || contactMessage===""){
            alert("Please Fill In all Sections before sending!");
            return;
        }
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              resetContactForm();
              alert("Message Sent, We will get back to you shortly");
          }, (error) => {
              console.error(error.text);
          });
      }
    return (
        <div className="contact">
            <form action="#" className="contact__form" onSubmit={sendEmail}>
                <input type="text" placeholder="Your Name" value={contactName} id="name" name="from_name" onChange={handleContactName} autoComplete="false"></input>
                <input type="email" placeholder="Email Id" value={contactEmail} id="email" name="user_email" onChange={handleContactEmail} autoComplete="false"></input>
                <textarea au="true" placeholder="Your Message" value={contactMessage} name="message" onChange={handleContactMessage} id="message" autoComplete="false" rows="6" cols="50"></textarea>
                <button type="submit" id="send"><span>Send</span><SendIcon/> </button>
            </form>
        </div>
    )
}

export default Contact
