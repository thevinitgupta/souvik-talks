import React, { useEffect, useState } from 'react'
import firebase from "../config/firebase";
import 'firebase/firestore';
import "../css/Articles.css"
import StoryCard from './StoryCard';

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
                {
                  return <StoryCard key={index+1} article={article}/>
                })
              }
            </div>
        </div>
    )
}

export default Articles
