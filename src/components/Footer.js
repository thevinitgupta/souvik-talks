import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Contact from './Contact';
import "../css/Footer.css";

function Footer() {
    return (
        <div id="contactForm" className="footer">
            <div className="footer__left">
                <div className="footer__left__head"><span>Let's talk</span>
                <p >Ask us anything or just say hi...</p></div>
                <div className ="footer__left__social">
                <a href="https://www.facebook.com/souvik.mondal.75098" target="_blank" rel="noopener noreferrer"><FacebookIcon  fontSize="large" className="social__icon facebook"/></a>
                <a href="https://www.instagram.com/souvik.7585/?fbclid=IwAR0HTDdzyVawK-dtGvtjGR-pn7N1TTPNlqCHBVLaZkt8KfBd5_2GgbeUono" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large" className="social__icon instagram"/></a>
                <a href="https://www.youtube.com/channel/UCwnn6OdTnkRFLfm1fY8Y7sg" target="_blank" rel="noopener noreferrer"><YouTubeIcon fontSize="large" className="social__icon youtube"/></a>
                </div>
                
                <div className="credits">
                    Header Image from 
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
