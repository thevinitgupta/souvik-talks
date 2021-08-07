import React from 'react'
import Typewriter from "../images/Typewriter.gif"
import "../css/NotFound.css"

function NotFound() {
    return (
        <div className="notFound">
            <div className="notFound__top">
                <img src={Typewriter} alt="not found typewriter" className="notFound__image"/>
            </div>
            <div className="notFound__bottom">
                <div className="notFound__bottom__head">
                    <div className="notFound__bottom__head__num one">4</div>
                    <div className="notFound__bottom__head__num two">0</div>
                    <div className="notFound__bottom__head__num three">4</div>
                </div>
                <div className="notFound__bottom__subHead">
                    <p>Unfortunately you are not in any ongoing<span>talks!!</span> </p>
                </div>
                <div className="notFound__bottom__link" onClick={()=>{window.location = "/"}}>
                    <span>To Homepage</span>
                </div>
            </div>
        </div>
    )
}

export default NotFound
