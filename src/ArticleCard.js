import React from 'react'
import "./css/ArticleCard.css"

function ArticleCard({title,src,id,link}) {
    return (
        <div className={`articleCard articleCard__${id}`}>
            <img src={src} alt="article" loading="lazy" className="articleCard__image"></img>
            <div className="articleCard__title">
                <a href={link}>
                {title.substr(0,50).concat("...")}
                </a>
                
            </div>
        </div>
    )
}

export default ArticleCard
