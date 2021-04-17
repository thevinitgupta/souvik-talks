import React, { useEffect, useState } from 'react'
import firebase from "../config/firebase";
import 'firebase/firestore';

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
            <h1>All Articles</h1>
        </div>
    )
}

export default Articles
