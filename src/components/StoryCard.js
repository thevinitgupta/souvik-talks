import React from 'react'
import "../css/StoryCard.css"
import SouvikTalkLogo from "../images/souviktalks.png";

function StoryCard({article}) {
    return (
        <div className="storyCard">
            <div className="storyCard__image">
                {article?.data?.imageUrl && <img src={article.data.imageUrl} alt="article"/>}
            </div>
            <div className="storyCard__body">
                <div className="storyCard__body__creator">
                    <div className="storyCard__body__creator__img">
                        <img referrerPolicy="no-referrer"
                        src={`${article?.data?.creator?.image || SouvikTalkLogo}`} 
                        alt="creator profile"
                        />
                    </div>
                    <div className="storyCard__body__creator__name">
                        {article?.data?.creator?.name || "Admin"}
                    </div>
                </div>
                <div className="storyCard__body__title" >
                    {article?.data?.title.substr(0,59) }
                </div>
            </div>
        </div>
    )
}

export default StoryCard
