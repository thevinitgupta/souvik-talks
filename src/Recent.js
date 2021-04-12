import React from 'react'
import articleImage1 from "./images/recent1.jpg";
import articleImage2 from "./images/recent2.jpg";
import articleImage3 from "./images/recent3.jpg";
import articleImage4 from "./images/recent4.jpg";
import ArticleCard from "./ArticleCard";
import "./css/Recent.css"

let articles = [
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
let recentArticle = {
    "title" : "The Goliath in Tech is here",
    "img" : articleImage1
}
function Recent() {
    return (
        <div className="recent">
            <div className="recent__head">
                Recent Articles
            </div>
            <div className="recent__articles">
            <div className="recent__latest">
                <ArticleCard src={recentArticle.img} title={recentArticle.title} id="0"/>
            </div>
            <div className="recent__others">
            {articles.map((article,index)=>
                 <ArticleCard key={index} src={article.img} title={article.title} id={index+1}/>)}
            </div>
            </div>
            <div className="recent__allBlogs">
                    <a href="/#" className="allBlogs">All Blogs</a>
                </div>
        </div>
    )
}

export default Recent
