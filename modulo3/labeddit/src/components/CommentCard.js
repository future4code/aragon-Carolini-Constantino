import { format } from "date-fns";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import GlobalStateContext from "../global/GlobalStateContext"
import { requestChangeCommentVote, requestCreateCommentVote, requestDeleteCommentVote } from "../services/requests";

const StyledButtons = styled.div`
display: flex;
gap: 3px;
justify-content: center;
width: 100%;
button {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 8px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 0.7rem;
  color: purple;
  line-height: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  
  
}

button:hover {
  background-color: #f7fafa;
}

button:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  outline: 0;
}

main{
    display: inline;
    width: 100%;
    margin: auto;
    padding: 1%;
    background-color: white;
    border-radius: 8px;
    border-style: solid;
    border-color: #ededeb;

}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
 display: flex;
 width: 100%;
 
}
`
export function CommentCard(props) {

    const { getters } = useContext(GlobalStateContext);
    const [isDownVoted, setIsDownVoted] = useState(false);
    const [isUpVoted, setIsUpVoted] = useState(false);
    const { getPostComments } = getters;
    const { id, userId, postId, body, createdAt, voteSum, userVote } = props.comment;
    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

    useEffect(() => {
        if (userVote) {
            userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
        };
    }, [userVote]);

    const chooseVote = (typeVote) => {
        if (typeVote === "up") {
            if (isDownVoted) {
                requestChangeCommentVote(id, 1, getPostComments, postId);
                setIsUpVoted(true);
                setIsDownVoted(false);
            } else {
                requestCreateCommentVote(id, 1, getPostComments, postId);
                setIsUpVoted(true);
            };
        } else {
            if (isUpVoted) {
                requestChangeCommentVote(id, -1, getPostComments, postId);
                setIsDownVoted(true);
                setIsUpVoted(false);
            } else {
                requestCreateCommentVote(id, -1, getPostComments, postId);
                setIsDownVoted(true);
            };
        };
    };

    const removeVote = (typeVote) => {
        requestDeleteCommentVote(id, getPostComments, postId);
        typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
    };

    const showVoteButtons = (
        <StyledButtons>
            {userVote && isDownVoted ?
                <button onClick={() => removeVote("down")}>Remover voto "Não Gostei"</button>
                : <button onClick={() => chooseVote("down")}>
                    {isUpVoted ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}
                </button>
            }
               {userVote && isUpVoted ?
                <button onClick={() => removeVote("up")}>Remover voto "Gostei"</button>
                : <button onClick={() => chooseVote("up")}>
                    {isDownVoted ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}
                </button>
            }
        </StyledButtons>
    );

    return(
       <article>
            <StyledButtons>
            <main>
            <p><b>Autor: {userId}</b></p>
            <p><i>{body}</i></p>
            </main>
            </StyledButtons>
            <p>criado em {date}</p>
            <p>Likes: {voteSum ? voteSum : 0}</p>
            {showVoteButtons}
            <hr/>
        </article>
    )
}