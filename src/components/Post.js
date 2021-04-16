import React from 'react'
import TextEditor from './TextEditor';

function Post() {
    return (
        <div className="post">
            <h2>New Article</h2>
            <div className="post__main">
                <div className="post__main__title">
                   <input type="text" className="main__title__input" placeholder="Title here"/> 
                </div>
                <div className="post__main__image">
                    <input  type="file" name="fileToUpload" id="fileToUpload"/>
                    <input type="submit" value="Upload Image" name="submit"/>
                </div>
            </div>
            <TextEditor/>
            <div className="post__submit">
                <button type="submit">Post</button>
            </div>
        </div>
    )
}

export default Post
