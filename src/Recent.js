import React from 'react'
import articleImage1 from "./images/recent1";
import articleImage2 from "./images/recent2";
import articleImage3 from "./images/recent3";
import articleImage4 from "./images/recent4";
import ArticleCard from "./ArticleCard";

let articles = [
    {
        "title" : "The Goliath in Tech is here",
        "img" : articleImage1
    },
    {
        "title" : "The Goliath in Tech is here",
        "img" : articleImage2
    },
    {
        "title" : "The Goliath in Tech is here",
        "img" : articleImage3
    },
    {
        "title" : "The Goliath in Tech is here",
        "img" : articleImage4
    }
]
function Recent() {
    return (
        <div className="recent">
            <div className="recent__head">
                Recent Articles
            </div>
            <div className="recent__articles">
                {articles.map((article,index)=> <ArticleCard key={index} src={article.img} title={article.title}/>)}
            </div>
        </div>
    )
}

export default Recent
