import React, { useEffect, useState } from 'react'
import {useLocation, useParams, withRouter} from "react-router-dom"
import firebase from "../config/firebase";
import 'firebase/firestore';
import parse from "html-react-parser";
import "../css/Article.css"
import Comment from './Comment';

function Article() {
    const [article,setArticle] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    const [rate,setRate] = useState(0);
    const [avgRate,setAvgRate] = useState(0);
    const [voterNumber,setVoterNumber] = useState(0);
    const [newComment,setNewComment] = useState("");
    const [allComments,setAllComments] = useState([]);
    const [formFocused,setFormFocused] = useState(false);
    const date = new Date(article?.time);
    let {id} = useParams();
    let {state} = useLocation();
    const db = firebase.firestore();
    const docRef = db.collection("Articles").doc(id);
    useEffect(()=>{
        if(state?.article){
            setArticle(state.article);
            setIsLoaded(true);
        }
        else {
            getArticle();
        }
    },[])

    useEffect(()=>{
        getComments();
    },[])

    function updateAvgRate(){
        setAvgRate(rate)
        docRef.update({
            avgRating : avgRate,
            totalVoters : voterNumber
        }).then(()=>{
            console.log("Average Rating Upated successfully!")
        }).catch((error)=>{
            console.log(error)
        })
    }
    
      function getArticle(){
          docRef
          .get()
          .then((doc) => {
            if(doc.exists) {
            //      doc.data() is never undefined for query doc snapshots
                console.log(doc.data())
                setArticle(doc.data())
                setIsLoaded(true);
                setAvgRate(doc.data()?.avgRating);
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


      //get live comments
      function getComments(){
        docRef.onSnapshot((dataSnapshot
            )=>{
                const comments = dataSnapshot.data().comments.sort((a,b)=> {
                    let aTime = new Date(a.time).getTime();
                    let bTime = new Date(b.time).getTime();
                    return bTime-aTime;
                })
                setAllComments(comments);
            })
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
                    <iframe width="720" height="405" src={article?.video} title="YouTube video player" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
                </div>
            }
            <div className="article__rating">
                <div className="article__rating__average">
                    <span><strong>Average Rating : </strong>{avgRate}</span>
                </div>
                <div className="rate__article">
                    <span className="rate__article__head"><strong>Rate :</strong></span>
                    <div className="stars">
                        <div className="star" id="1" onClick={(e)=>{
                            handleRate(e);
                            setVoterNumber(voterNumber+1);
                            updateAvgRate();
                            
                        }}></div>
                        <div className="star" id="2" onClick={(e)=>{
                            handleRate(e);
                            setVoterNumber(voterNumber+1);
                            updateAvgRate();
                        }}></div>
                        <div className="star" id="3" onClick={(e)=>{
                            handleRate(e);
                            setVoterNumber(voterNumber+1);
                            updateAvgRate();
                        }}></div>
                        <div className="star" id="4" onClick={(e)=>{
                            handleRate(e);
                            setVoterNumber(voterNumber+1);
                            updateAvgRate();
                        }}></div>
                        <div className="star" id="5" onClick={(e)=>{
                            handleRate(e);
                            setVoterNumber(voterNumber+1);
                            updateAvgRate();
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
    )
}

export default withRouter(Article)
