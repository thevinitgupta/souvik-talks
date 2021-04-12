import React from 'react'

import "./css/Social.css";
function Social() {
    return (
        <div className="social">
          <div className="social__link facebook">
          <a href="https://www.facebook.com/souvik.mondal.75098" target="_blank" rel="noopener noreferrer"><span>Facebook</span></a>
          </div>
          <div className="social__link instagram">
          <a href="https://www.instagram.com/souvik.7585/?fbclid=IwAR0HTDdzyVawK-dtGvtjGR-pn7N1TTPNlqCHBVLaZkt8KfBd5_2GgbeUono" target="_blank" rel="noopener noreferrer"> <span>Instagram</span></a>
          </div>
          <div className="social__link youtube">
          <a href="https://www.youtube.com/channel/UCwnn6OdTnkRFLfm1fY8Y7sg" target="_blank" rel="noopener noreferrer">
            <span>YouTube</span>
          </a>
            
          </div>
        </div>
    )
}

export default Social
