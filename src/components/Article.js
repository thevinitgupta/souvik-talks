import React from 'react'
import {useLocation, useParams, withRouter} from "react-router-dom"

function Article() {

    let {id} = useParams();
    let {state} = useLocation();
    let article = state.article;
    console.log(state.article)
    return (
        <div className="article">
        <div className="article__main">
            <img src={article.imageUrl} alt="head"></img>
            <h1>{article.title}</h1>
        </div>
        <div className="article__body">
            <h2>{article?.body?.[0]?.head}</h2>
            <p>{article?.body?.[0]?.body}</p>
        </div>
        </div>
    )
}

export default withRouter(Article)
