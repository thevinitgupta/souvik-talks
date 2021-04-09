import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./css/Footer.css";

function Footer() {
    return (
        <div className="footer">
           <FacebookIcon  fontSize="large" className="social__icon facebook"/>
          <InstagramIcon fontSize="large" className="social__icon instagram"/>
          <YouTubeIcon   fontSize="large" className="social__icon youtube"/>
          <div className="credits">
          <a href="https://www.freepik.com/vectors/people">People vector created by stories - www.freepik.com</a>
          </div>  
        </div>
    )
}

export default Footer
