import React, { useEffect, useState } from 'react'
import firebase from "../config/firebase";
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import "../css/Articles.css"

function Articles() {
    const [articles,setArticles] = useState([]);
    useEffect(() => {
   function getArticles(){
     const db = firebase.firestore();
       db.collection("Articles")
       .get()
       .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
         //      doc.data() is never undefined for query doc snapshots
           setArticles((prevValue)=> {
             return [
               ...prevValue,
               {
                 id: doc.id,
                 data : doc.data()
               }
             ]
           })
          });
     })
     .catch((error) => {
       console.log("Error getting articles: ", error);
   });
   }
   getArticles();
   }, [])
    return (
        <div className="articles">
            
            <div className="articles__container">
            <span className="articles__container__head">All Articles</span>
              {articles.map((article,index)=>
                (<Link to={{
                    pathname :`/article/${article?.id}`,
                    state : {article:article?.data}
                    }} 
                   key={index+1} className="articles__container__link">
                      <div className="articles__container__link__image">
                        {article?.data?.imageUrl && <img src={article.data.imageUrl} alt="article"/>}
                      </div>
                      <div className="articles__container__link__text">
                        <span>{article?.data?.title}</span>
                      </div>
                 </Link>)
              )}
            </div>
        </div>
    )
}

export default Articles
