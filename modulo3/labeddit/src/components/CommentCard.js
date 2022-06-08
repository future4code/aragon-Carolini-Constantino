import { format } from "date-fns";
import { useContext, useEffect } from "react"
import GlobalStateContext from "../global/GlobalStateContext"

export function CommentCard(props) {
    const { getters } = useContext(GlobalStateContext);
    const { getPostComments } = getters;
    const { userId, body, createdAt } = props.comment;

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

    useEffect(() => {

    }, [])

    return(
        <article>
            <h3>{body}</h3>
            <h6>Autor: {userId}</h6>
            <p>criado em {date}</p>
            <p>Likes: </p>
            <button>Dislike</button>
            <button>Like</button>
        </article>
    )
}