import React, { useState } from 'react'
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

function Post() {

    const [title,setTitle]= useState("");
    const [imgUploaded, setImgUploaded] = useState(false);
    const [imgUploading,setImgUploading] = useState(false);
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
    const [body, setBody] = useState('');

    function addTitle(e){
        setTitle(e.target.value)
    }
    //function to divide the body into array of objects : {body : "",head : ""}
    function handleBlog(bodyVal){
        setValue((prevVal)=>{
            let newValue =  {
                ...prevVal,
                title,
                body : bodyVal
            }
            console.log(newValue);
            return newValue;
        })
    }
    return (
        <div className="post">
            <h2>New Article</h2>
            <div className="post__main">
                <div className="post__main__title">
                   <input type="text" className="main__title__input" placeholder="Title here" value={title} onChange={(e)=> addTitle(e)}/> 
                </div>
                <div className="post__main__image">
                    <input  type="file" name="fileToUpload" id="fileToUpload"/>
                    <input type="submit" value="Upload Image" name="submit"/>
                </div>
            </div>
            <ReactQuill theme="snow" value={body} onChange={setBody}/>
            <div className="post__submit">
                <button type="submit" onClick={()=>{console.log(body); handleBlog(body);}}>Post</button>
            </div>
        </div>
    )
}

export default Post
