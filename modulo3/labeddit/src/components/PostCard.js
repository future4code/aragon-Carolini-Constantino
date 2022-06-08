import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToPostDetailsPage } from "../routes/coordinator";
import { requestChangePostLike, requestCreatePostLike, requestDeletePostLike } from "../services/requests";

export function PostCard(props) {
    const navigate = useNavigate();

    const {setters, getters} = useContext(GlobalStateContext);

    const { setPost } = setters;

    const { getPosts } = getters;

    const {id, userId, title, body, createAt, voteSum, commentCout, userVote } = props.post;

    const [isDislike, setIsDislike] = useState(false);

    const [isLike, setIsLike] = useState(true)

    const date = createAt && format(new Date(createAt), `dd/MM/yyyy`); //pesquisar sobre isso

    useEffect(() => {
        if (userVote) {
            userVote === 1 ? setIsLike(true) : setIsDislike(true);
        };
    }, [userVote]);

    const goToComments = () => {
        setPost(props.post);
        goToPostDetailsPage(navigate, id)
        
    }
    console.log(goToComments)

    const chooseLike = (typeVote) => {
        if (typeVote === "up") {
            if (isDislike){
                requestChangePostLike(id, 1, getPosts);
                setIsLike(true);
                setIsDislike(false);
            } else {
                requestCreatePostLike(id, 1, getPosts);
                setIsLike(true)
            };
        } else {
            if (isLike){
                requestCreatePostLike(id,-1, getPosts);
                setIsDislike(true);
                setIsLike(false);
            } else{
                requestCreatePostLike(id, -1, getPosts);
                setIsDislike(true);
            }
        }
    };

    const removeLike = (typeVote) => {
        requestDeletePostLike(id, getPosts);
        typeVote === "up" ? setIsLike(false) : setIsDislike(false);
    }

    const showButtons = props.isFeed && (
        <>
        {userVote && isDislike ?
            <button onClick={() => removeLike("down")}>Remover voto "Não Gostei"</button>
            : <button onClick={() => chooseLike("down")}>
                {isLike ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}
            </button>
        }
        <br />
        {userVote && isLike ?
            <button onClick={() => removeLike("up")}>Remover voto "Gostei"</button>
            : <button onClick={() => chooseLike("up")}>
                {isDislike ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}
            </button>
        }
        </>
    )
    return(
        <article>
            <h3>{title}</h3>
            <span><b>{userId}</b></span>
            <p>Criado em {date}</p>
            <img src={"https://picsum.photos/200/300?random=" + id} alt="Imagem aleatória" />
            <p>Descrição: {body}</p>
            <p>Curtidas: {voteSum ? voteSum : 0 }</p>
           {showButtons}
    
            <p>Comentários: {commentCout? commentCout : 0}</p>
            {props.isFeed && <button onClick={goToComments}>Ver Comentários</button>}
            <hr/>
        </article>
    )
}