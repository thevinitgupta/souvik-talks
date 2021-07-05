import firebase from 'firebase';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import "../css/Post.css"

import 'react-quill/dist/quill.snow.css';

function Post() {
    var storageRef = firebase.storage().ref();
    const [title,setTitle]= useState("");
    const [selectedFile,setSelectedFile] = useState(null);
    const [value,setValue] = useState({
        title : "",
        imageUrl : "",
        body : "",
        comments : [],
        creator : {},
        tags : [],
        totalVoters : 0,
        video : "",
        avgRating : 0
    });

    function addTitle(e){
        setTitle(e.target.value);
        setValue((prevVal)=> {
           return {
               ...prevVal,
               title : e.target.value
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
        var metadata = {
            contentType: 'image/jpeg'
          };
          
          // Upload file and metadata to the object 'images/mountains.jpg'
          var uploadTask = storageRef.child('Feature Images/' + selectedFile.name).put(selectedFile, metadata);
          
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
                default : 
                 console.log("No Process Running")
              }
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
                  console.log("Unknown Error on Upload")
              }
            }, 
            () => {
              // Upload completed successfully, now we can get the download URL
              uploadTask.snapshot.ref.getDownloadURL().then((imageUrl) => {
                console.log('File available at', imageUrl);
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
    return (
        <div className="post">
            <h2>New Article</h2>
            <div className="post__main">
                <div className="post__main__title">
                   <input type="text" className="main__title__input" placeholder="Title here" value={title} onChange={(e)=> addTitle(e)}/> 
                </div>
                <div className="post__main__image">
                    <input  type="file" name="fileToUpload" id="fileToUpload" onChange={fileChangedHandler}/>
                    <input type="submit" value="Upload Image" name="submit" id="image__upload__button" onClick={handleImageUpload}/>
                </div>
            </div>
            <ReactQuill theme="snow" value={value.body} onChange={(e)=>{handleBlog(e)}} className="post__content"/>
            <div className="post__submit">
                <button type="submit" onClick={()=>{console.log(value);}}>Post</button>
            </div>
        </div>
    )
}

export default Post
