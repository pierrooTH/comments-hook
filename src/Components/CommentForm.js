import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function CommentForm({comments, setComments}) {
    const [message, setMessage] = useState("")
    const [pseudo, setPseudo] = useState("")

    const submitComments = (e) => {
        e.preventDefault();
        let currentData = {
            id: uuidv4(),
            name: pseudo,
            body: message
        }
        let currentsData = [...comments, currentData];
        console.log(currentsData);
        setComments(currentsData);
        setMessage("");
        setPseudo("");
    }
    
    return (
        <form className="field" onSubmit={submitComments}>
            <p className="paragraph">Ajouter un commentaire</p>
            <label className="label">Name</label>
            <div className="control">
                <input className="input field__name" type="text" placeholder="Your name" onChange={e => setPseudo(e.target.value)} value={pseudo} />
            </div>
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea field__msg" placeholder="Your message" onChange={e => setMessage(e.target.value)} value={message}>
                </textarea>

            </div>
            <div className="control">
                <input type="submit"  className="button is-primary field__btn" value="Envoyer"></input>
            </div>
        </form>
    )
}
