import firebase from 'firebase';
import React, { Fragment, useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import { AuthContext } from "../context/userContext";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Security from "../images/security.png"
import "../css/Post.css"

import 'react-quill/dist/quill.snow.css';

function Post() {
  const { user } = useContext(AuthContext); 
    var storageRef = firebase.storage().ref();
    var db = firebase.firestore();
    const [title,setTitle]= useState("");
    const [uploadRunning,setUploadRunning] = useState(false);
    const [uploadPercent,setUploadPercent] = useState(0);
    const [uploadComplete,setUploadComplete] = useState(false);
    const [loggedIn,setLoggedIn] = useState(false);
    const [videoUrl,setVideoUrl] = useState("");
    const [selectedFile,setSelectedFile] = useState(null);
    const [value,setValue] = useState({
        title : "",
        imageUrl : "",
        time: "",
        body : "",
        comments : [],
        creator : {},
        tags : [],
        totalVoters : 0,
        video : "",
        avgRating : 0
    });

    useEffect(() => {
      if(user){
        setLoggedIn(true);
      }
    }, [user]);

    function addTitle(e){
        setTitle(e.target.value);
        setValue((prevVal)=> {
           return {
               ...prevVal,
               title : e.target.value,
            }
        });
    }

    //function to divide the body into array of objects : {body : "",head : ""}
    function handleBlog(bodyVal){
        setValue((prevVal)=>{
            let newValue =  {
                ...prevVal,
                title,
                body : bodyVal
            }
            return newValue;
        })
    }

    //handle image upload
    function fileChangedHandler(event){
        setSelectedFile(event.target.files[0]);
    }

    function handleImageUpload(){
      setUploadRunning(true);
        
        var metadata = {
            contentType: selectedFile.type
          };
          
          // Upload file and metadata to the object 'images/mountains.jpg'
          var uploadTask = storageRef.child('Feature Images/' + selectedFile.name).put(selectedFile, metadata);
          
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on('state_changed', // or 'state_changed'
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              setUploadPercent(progress);
            }, 
            (error) => {
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              switch (error.code) {
                case 'storage/unauthorized':
                  // User doesn't have permission to access the object
                  break;
                case 'storage/canceled':
                  // User canceled the upload
                  break;
          
                // ...
          
                case 'storage/unknown':
                  // Unknown error occurred, inspect error.serverResponse
                  break;

                  default : 
              }
            }, 
            () => {
              // Upload completed successfully, now we can get the download URL
              uploadTask.snapshot.ref.getDownloadURL().then((imageUrl) => {
                setUploadRunning(false);
                setUploadComplete(true)
                setValue((prevVal)=>{
                    return {
                        ...prevVal,
                        imageUrl
                    }
                })
              });
            }
          );
    }

    async function handleArticleUpload(){
      let time = new Date();
      time = time.toISOString();
      value.time = time;
        value.creator = {
          id : user.uid,
          name : user.displayName,
          image : user.photoURL
        }
        const newPostRef = await db.collection("Articles").doc();
        await newPostRef.set(value);
        setValue(
          {
            title : "",
            imageUrl : "",
            time: "",
            body : "",
            comments : [],
            creator : {},
            tags : [],
            totalVoters : 0,
            video : "",
            avgRating : 0
          });
          setTitle("");
          setVideoUrl("")
          setSelectedFile(null);
        window.location="/";
    }

    //handle youtube video url
    function handleVideoUrl(e){
      setVideoUrl(e.target.value);
      setValue((prevVal)=> {
        return {
            ...prevVal,
            video : `https://www.youtube.com/embed/${e.target.value.split("v=")[1]}`, 
         }
     });
    }
    return (
    <Fragment>
      {
        loggedIn ? (
          <div className="post">
              <h2>New Article</h2>
            <div className="post__main">
                <div className="post__main__title">
                   <input type="text" className="main__title__input" placeholder="Title here" value={title} onChange={(e)=> addTitle(e)}/> 
                </div>
                <div className="post__main__image">
                    {uploadRunning ? 
                    <div className="progress__bar">
                        <div className="progress__bar__loader" style={{width : `${uploadPercent}%`}}></div>
                    </div> :
                    uploadComplete ? 
                    <div className="upload__complete">
                    <DoneAllIcon fontSize="large" className="upload__done__icon"/>
                    Uploaded Successfully
                    </div>
                    :
                    <>
                    <input  type="file" name="fileToUpload" id="fileToUpload" onChange={fileChangedHandler}/>
                    <input type="submit" value="Upload Image" name="submit" id="image__upload__button" onClick={handleImageUpload}/>
                    </>
                    }
                </div>
                <div className="post__main__link">
                  <label htmlFor="post__video__link">Linked Video </label>
                  <input type="text" className="post__video__link" value={videoUrl} onChange={handleVideoUrl} placeholder="https://youtube.com/myvideo"/>
                </div>
            </div>
            <ReactQuill theme="snow" value={value.body} onChange={(e)=>{handleBlog(e)}} className="post__content"/>
            <div className="post__submit">
                <button type="submit" onClick={handleArticleUpload}>Post</button>
            </div>
      </div>
        ) : 
        <div className="post__fail">
          <img className="post__fail__img" src={Security} alt="forbidden"/>
          <h2>Please log in first!</h2>
          <span className="post__login__link">
          Go to 
          <a href="/login">
          Login
          </a> 
          Page
          </span>
        </div>
      }
    </Fragment>
      
    )
}

export default Post
