import React, { useEffect, useState } from 'react'
import {useParams, withRouter} from "react-router-dom"
import firebase from "../config/firebase";
import 'firebase/firestore';
import parse from "html-react-parser";
import "../css/Article.css"
import Comment from './Comment';
import NotFound from './NotFound';

function Article() {
    const [article,setArticle] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    const [notFound,setNotFound] = useState(false);
    const [rate,setRate] = useState(0);
    const [avgRate,setAvgRate] = useState(0);
    const [newComment,setNewComment] = useState("");
    const [allComments,setAllComments] = useState([]);
    const [formFocused,setFormFocused] = useState(false);
    const date = new Date(article?.time);
    let {id} = useParams();
    const db = firebase.firestore();
    const docRef = db.collection("Articles").doc(id);
    useEffect(()=>{
            getArticle();
    },[])

    function getArticle(){
        docRef.onSnapshot((dataSnapshot
            )=>{
                /**
                 * !This document doesn't exist. Check doc.exists to make sure the document exists before calling doc.data(). 
                 * */
                 if(dataSnapshot.exists){
                    setArticle(dataSnapshot.data());
                    setIsLoaded(true);
                const comments = dataSnapshot?.data().comments.sort((a,b)=> {
                    let aTime = new Date(a.time).getTime();
                    let bTime = new Date(b.time).getTime();
                    return bTime-aTime;
                })
                setAllComments(comments);
                setAvgRate(dataSnapshot.data().avgRating);
                console.log(dataSnapshot.data().avgRating);
                 }
                 else {
                     setNotFound(true);
                     console.log("Doc does not exist!")
                 }
                
            });
    }

    function updateAvgRate(currRate){
        console.log(avgRate,currRate,article.totalVoters)
        article.totalVoters = article.totalVoters+1;
        docRef.update({
            avgRating : Math.round(((avgRate+currRate)/article.totalVoters + Number.EPSILON) * 10) / 10,
            totalVoters : article.totalVoters
        }).then(()=>{
            console.log("Average Rating Upated successfully!")
        }).catch((error)=>{
            console.log(error)
        })
    }
    
      
      function handleRate(val){
        const starId = parseInt(val.target.id);
        console.log(typeof starId,starId)
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
        updateAvgRate(starId);
      }

      function postComment(){
          const comment = {
              likes : 0,
              time : new Date().getTime(),
              value : newComment
          }
        docRef.update(
            "comments" ,[...allComments,comment]
        ).then(()=>{
            console.log("updated");
            setNewComment("");
            setFormFocused(false);
        }).catch((error)=>{
            console.log("Error");
            console.log(error);
        })
        
      }

    return (
            !notFound ?
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
            {article?.body?.length>0 &&  parse(`<div>${article.body}</div>`)
                
            }
            </div>
            {
                article?.video && 
                <div className="article__video">
                    <iframe id="youtube__video" src={article?.video} title="YouTube video player" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
                </div>
            }
            <div className="article__rating">
                <div className="article__rating__average">
                    <span><strong>Average Rating : </strong>{article.avgRating}</span>
                </div>
                <div className="rate__article">
                    <span className="rate__article__head"><strong>Rate :</strong></span>
                    <div className="stars">
                        <div className="star" id="1" onClick={(e)=>{
                            handleRate(e);                            
                        }}></div>
                        <div className="star" id="2" onClick={(e)=>{
                            handleRate(e);
                        }}></div>
                        <div className="star" id="3" onClick={(e)=>{
                            handleRate(e);
                        }}></div>
                        <div className="star" id="4" onClick={(e)=>{
                            handleRate(e);
                        }}></div>
                        <div className="star" id="5" onClick={(e)=>{
                            handleRate(e);
                        }}></div>
                    </div>
                </div>
            </div>
            
            <div className="article__comments">
                <div className="article__comments__add">
                    <form method="POST" onClick={()=>{setFormFocused(true)}} style={formFocused? {minHeight:"10vh"}: {}}>
                        <input type="text" id="newComment" value={newComment} placeholder="Your thoughts?" onChange={(e)=>{
                            setNewComment(e.target.value)
                        }}></input>
                        {
                          formFocused &&  <button type="submit" id="postComment" onClick={(e)=>{
                              e.preventDefault();
                              console.log(newComment);
                              postComment();
                          }}>Post</button>
                        }
                        
                    </form>
                </div>
                <div className="article__comments__display">
                        {allComments.length>0 ? 
                        allComments.map((comment,index)=>{
                            return <Comment key={index+1} commentObject={comment} />
                        }) : <div className="article__comments__empty">Start a new discussion...</div>
                        }
                </div>
            </div>
            </div>
    :
        <NotFound/>
    )
}

export default withRouter(Article)
