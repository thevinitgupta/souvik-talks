import React from 'react'

function ArticleCard(title,src) {
    return (
        <div className="articleCard">
            <img src={src} alt="article" loading="lazy"></img>
            <div className="articleCard__title">
                {title.substr(0,10).concat("...")}
            </div>
        </div>
    )
}

export default ArticleCard
