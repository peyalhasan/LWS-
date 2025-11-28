import { useEffect, useState } from "react"
import { fetchComments } from "../Utils/FetcchComments";

export default function Comments({postId}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {

        let ignore = false;

        // Fetch Comments 
        async function startFetching() {
            const json = await fetchComments(postId);
            if(!ignore){
                console.log('Ingore....')
            setComments(json)}
            }
        startFetching();

        return () => {ignore = true}

    }, [postId])

    return (
        <>
            <ul>
                {
                    comments.map(comment => <li key={comment.id} > {comment.name} </li>)
                }
            </ul>
        </>
    )
}