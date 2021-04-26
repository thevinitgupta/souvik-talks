import React from 'react'
import "../css/Comment.css"

function Comment({commentObject}) {

    let {value,time} = commentObject;
    const now = new Date();
    time = Math.round((now - time)/(1000*60));
    let timeAgo = time<=60 ? "mins" : time<=240 ? "hrs" : "days";
    time = time<=60 ? time : time<=240 ? Math.round(time/60) : Math.round(time/(60*24))
    return (
        <div className="comment">
            <div className="comment__body">{value}</div>
            <div className="comment__time">{`${time} ${timeAgo} ago`}</div>
        </div>
    )
}

export default Comment
