import React from 'react'
import "../css/ArticleCard.css"

function ArticleCard({title,src,id}) {
    return (
        <div className={`articleCard articleCard__${id}`}>
            <img src={src} alt="article" loading="lazy" className="articleCard__image"></img>
            <div className="articleCard__title">
                {title}                
            </div>
        </div>
    )
}

export default ArticleCard
