import React, { use } from 'react';
import { fetchData } from '../Utils/data';

const Comments = ({postId}) => {

    const comments = use(fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`))

    return (
        <div>
            <ul>
                {
                    comments.map((comment)=>(
                        <li key={comment.id}> {comment.name} </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Comments;