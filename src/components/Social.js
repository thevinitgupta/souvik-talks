import React, { useEffect, useState } from 'react'
import useWindowSize from "../hooks/useWindowSize"
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import "../css/Social.css";
function Social() {
    const [windowWidth] = useWindowSize();
    
    return (
        <div className="social">
          <div className="social__link facebook">
          <a href="https://www.facebook.com/souvik.mondal.75098" target="_blank" rel="noopener noreferrer">{windowWidth>580 && windowWidth<780?<FacebookIcon fontSize="large" className="social__icon facebook"/>:<span>Facebook</span>}</a>
          </div>
          <div className="social__link instagram">
          <a href="https://www.instagram.com/souvik.7585/?fbclid=IwAR0HTDdzyVawK-dtGvtjGR-pn7N1TTPNlqCHBVLaZkt8KfBd5_2GgbeUono" target="_blank" rel="noopener noreferrer"> {windowWidth>580 && windowWidth<780?<InstagramIcon fontSize="large" className="social__icon instagram"/>:<span>Instagram</span>}</a>
          </div>
          <div className="social__link youtube">
          <a href="https://www.youtube.com/channel/UCwnn6OdTnkRFLfm1fY8Y7sg" target="_blank" rel="noopener noreferrer">
            {windowWidth>580 && windowWidth<780?<YouTubeIcon fontSize="large" className="social__icon youtube"/>:<span>YouTube</span>}
          </a>
            
          </div>
        </div>
    )
}

export default Social
