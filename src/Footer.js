import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./css/Footer.css";
import Contact from './Contact';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__left__head"><span>Let's talk</span>
                <p>Ask us anything or just say hi...</p></div>
                <div className ="footer__left__social">
                    <FacebookIcon  fontSize="large" className="social__icon facebook"/>
                    <InstagramIcon fontSize="large" className="social__icon instagram"/>
                    <YouTubeIcon   fontSize="large" className="social__icon youtube"/>
                </div>
                
                <div className="credits">
                    Background Image from 
                    <a href="https://www.freepik.com/vectors/people">www.freepik.com</a>
                </div>  
                
            </div>
            <div className="footer__right">
                <Contact/>
            </div>
        </div>
    )
}

export default Footer
