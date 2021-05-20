import React from 'react'
import Comment from './Comment'

export default function CommentList({comments, isAdmin, setComments}) {

    const commentsJSX = comments.map(comment => {
        return <Comment key={comment.id}
        id={comment.id} 
        name={comment.name} 
        message={comment.body} 
        isAdmin={isAdmin}
        setComments={setComments}
        comments={comments}/>
    })
    
    return (
        <div className="list__comments">
            <p className="paragraph">Liste des commentaires ({comments.length})</p>
            <ul className="list">
                {commentsJSX}
            </ul>
        </div>
    )
}
