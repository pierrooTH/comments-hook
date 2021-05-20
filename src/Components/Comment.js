import React from 'react'

export default function Comment({id, name, message, isAdmin, comments, setComments}) {

    const deleteComment = () => {
        let newComments = comments.filter(comment => comment.id !== id)
        setComments(newComments)
    }
    
    return (
        <div>
            <li><strong>{name}</strong>  {isAdmin ? <button onClick={deleteComment} className="delete"></button> : null}
            <br/>{message}</li>
            
        </div>
    )
}
