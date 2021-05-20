import React, {useState} from 'react';
import AdminMode from '../Components/AdminMode';
import CommentForm from '../Components/CommentForm';
import CommentList from './CommentList';
// import axios from 'axios'



export default function Comments() {

    const [comments, setComments] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/comments')
    //     .then(res => {
    //         console.log(res.data);
    //         setComments(res.data);
    //     })

    // }, [])
    const [isAdmin, setIsAdmin] = useState(false)
     function changeMode() {
        setIsAdmin(!isAdmin)
    }
    return (
        <div className="comments">
            <AdminMode isAdmin={isAdmin} changeMode={changeMode}/>
            <div className="columns">
                <div className="column">
                    <CommentForm comments={comments} setComments={setComments}/>
                </div>
                <div className="column">
                    <CommentList isAdmin={isAdmin} comments={comments} setComments={setComments}/>
                </div>
            </div>
        </div>
    )
}
