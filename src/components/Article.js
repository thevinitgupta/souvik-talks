import React, { useEffect, useState } from 'react'
import {useLocation, useParams, withRouter} from "react-router-dom"
import firebase from "../config/firebase";
import 'firebase/firestore';
import parse from "html-react-parser";

function Article() {
    const [article,setArticle] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
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
            <img src={article.imageUrl} alt="head"></img>
            <h1>{article.title}</h1>
            </div>
            <div className="article__body">
            {article?.body.length>0 && article?.body?.map(
                (bodyVal,index) => {return parse(`<div>${bodyVal.head}${bodyVal.body}</div>`)
                }
            )}
            </div>
            </div>
    )
}

export default withRouter(Article)
