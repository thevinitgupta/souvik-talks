import React from 'react'
import Reading from "./reading.svg";
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./css/Top.css"

function Main() {
    return (
        <div className="top">
            <div className="top__left">
                <div className="top__left__mainHead">We talk to inform!</div>
                <div className="top__left__subHead">Not to JUDGE...</div>
                <div className="top__cta">
                    <div className="cta cta__youtube"><YouTubeIcon   fontSize="large" className="social__icon youtube"/>Go to Channel</div> 
                </div>
            </div>
            <div className="top__right">
                <img className="top__right__image" alt="person reading blogs and news" src={Reading}></img>
            </div>
        </div>
    )
}

export default Main
