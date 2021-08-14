import React from 'react'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "../css/ActionButton.css"

function ActionButton() {
    return (
        <div className="actionButton">
            <NoteAddIcon  fontSize="large" className="actionButton__icon add__post"/>
            <PersonAddIcon  fontSize="large" className="actionButton__icon add__user"/>
        </div>
    )
}

export default ActionButton
