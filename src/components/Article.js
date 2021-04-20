import React, { useEffect, useState } from 'react'
import {useLocation, useParams, withRouter} from "react-router-dom"
import firebase from "../config/firebase";
import 'firebase/firestore';
import parse from "html-react-parser";
import "../css/Article.css"

function Article() {
    const [article,setArticle] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    const date = new Date(article?.time);
    let {id} = useParams();
    let {state} = useLocation();
    useEffect(()=>{
        if(state?.article){
            setArticle(state.article);
            setIsLoaded(true);
        }
        else {
            getArticle()
        }
    },[])
    
      function getArticle(){
        const db = firebase.firestore();
          db.collection("Articles").doc(id)
          .get()
          .then((doc) => {
            if(doc.exists) {
            //      doc.data() is never undefined for query doc snapshots
                console.log(doc.data())
                setArticle(doc.data())
                setIsLoaded(true);
            }
        })
        .catch((error) => {
          console.log("Error getting articles: ", error);
      });
      }
    return (
            isLoaded && 
            <div className="article">
            <div className="article__main">
            <div className="article__main__image">
                <img src={article.imageUrl} alt="head"></img>
            </div>
            <div className="article__main__title">
                <h1>{article.title}</h1>
                <div className="article__main__date">
                    <span><strong>Posted on : </strong>{`${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`}</span>
                </div>
            </div>
            
            </div>
            <div className="article__body">
            {article?.body.length>0 && article?.body?.map(
                (bodyVal,index) => {return parse(`<div>${bodyVal.head}${bodyVal.body}</div>`)
                }
            )}
            </div>
            <div className="article__video">
            <iframe width="720" height="405" src={article?.video} title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>
            </div>
    )
}

export default withRouter(Article)
