import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "../css/TextEditor.css"

function TextEditor() {

    return (
        <div className="editor">
            <Editor wrapperClassName="editor__wrapper"
  editorClassName="editor__input"
  toolbarClassName="editor__options" 
  />
        </div>
        
    )
}

export default TextEditor
