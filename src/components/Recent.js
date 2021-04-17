import React, { useEffect, useState } from 'react'
// import articleImage1 from "../images/recent1.jpg";
// import articleImage2 from "../images/recent2.jpg";
// import articleImage3 from "../images/recent3.jpg";
// import articleImage4 from "../images/recent4.jpg";
import firebase from "../config/firebase";
import 'firebase/firestore';
import ArticleCard from "./ArticleCard";

import "../css/Recent.css"
import {Link} from "react-router-dom";

// let articles = [
//     {
//         "title" : "The Goliath in Tech is here",
//         "img" : articleImage2
//     },
//     {
//         "title" : "The Goliath in Tech is here",
//         "img" : articleImage3
//     },
//     {
//         "title" : "The Goliath in Tech is here",
//         "img" : articleImage4
//     }
// ]
// let recentArticle = {
//     "title" : "The Goliath in Tech is here",
//     "img" : articleImage1
// }
function Recent({recent}) {
    const [articles,setArticles] = useState([]);
   useEffect(() => {
  function getArticles(){
    const db = firebase.firestore();
      db.collection("Articles").orderBy("time","desc")
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
        <div className="recent">
            {articles && console.log(articles)}
            <div className="recent__head">
                Recent Articles
            </div>
            {articles && <div className="recent__articles">
            <div className="recent__latest">
            <Link to={{
              pathname :`/article/${articles[0]?.id}`,
              state : {article: articles[0]?.data}
              }} key={0} className="recent__latest__link">
                <ArticleCard src={articles[0]?.data?.imageUrl} title={articles[0]?.data?.title} id="0"/>
            </Link>
                
            </div>
            <div className="recent__others">
            {articles.map((article,index)=>
                   (index>0&&index<4) && 
                  <Link to={{
                    pathname :`/article/${articles[index]?.id}`,
                    state : {article:articles[index]?.data}
                    }} 
                   key={index+1} className="recent__others__link">

                    <ArticleCard key={articles[index]?.id} src={articles[index]?.data?.imageUrl} title={articles[index]?.data?.title}/>
                 </Link>
                 )} 
            </div>
            </div>}
            
            <div className="recent__allBlogs" onClick={()=>{
                console.log(recent);
            }}>
                    <Link to={`/all-articles`} className="allBlogs">All Blogs</Link>
                </div>
        </div>
    )
}

export default Recent
