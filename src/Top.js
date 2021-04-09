import React from 'react'
import Reading from "./reading.svg";
import "./css/Top.css"

function Main() {
    return (
        <div className="top">
            <div className="top__left">
                <div className="top__left__mainHead">We talk to inform!</div>
                <div className="top__left__subHead">Not to JUDGE...</div>
            </div>
            <div className="top__right">
                <img className="top__right__image" alt="person reading blogs and news" src={Reading}></img>
            </div>
        </div>
    )
}

export default Main
