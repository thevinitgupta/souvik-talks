import React, { useEffect, useState } from 'react'
import {useLocation, useParams, withRouter} from "react-router-dom"
import firebase from "../config/firebase";
import 'firebase/firestore';
import parse from "html-react-parser";
import "../css/Article.css"

function Article() {
    const [article,setArticle] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    const [rate,setRate] = useState(0);
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

      function handleRate(val){
        const starId = parseInt(val.target.id);
        if(starId<rate){
            for(let i=starId;i<rate;i++){
                val.target.parentElement.children[i].classList.remove("star__active")
            }
            
        }
        else {
            for(let i=rate;i<starId;i++){
                val.target.parentElement.children[i].classList.add("star__active");
            }
        }
        setRate(starId);
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
            {
                article?.video && 
                <div className="article__video">
                    <iframe width="720" height="405" src={article?.video} title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                </div>
            }
            <div className="article__rating">
                <div className="article__rating__average">
                    <span><strong>Average Rating : </strong>{article?.avgRating}</span>
                </div>
                <div className="rate__article">
                    <span className="rate__article__head"><strong>Rate :</strong></span>
                    <div class="stars">
                        <div class="star" id="1" onClick={(e)=>{
                            handleRate(e)
                        }}></div>
                        <div class="star" id="2" onClick={(e)=>{
                            handleRate(e)
                        }}></div>
                        <div class="star" id="3" onClick={(e)=>{
                            handleRate(e)
                        }}></div>
                        <div class="star" id="4" onClick={(e)=>{
                            handleRate(e)
                        }}></div>
                        <div class="star" id="5" onClick={(e)=>{
                            handleRate(e)
                        }}></div>
                    </div>
                </div>
            </div>
            
            </div>
    )
}

export default withRouter(Article)
