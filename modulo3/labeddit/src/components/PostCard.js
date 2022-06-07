import { format } from "date-fns";

export function PostCard(props) {

    const {id, userId, title, body, createAt, voteSum, commentCout } = props.post;

    const date = createAt && format(new Date(createAt), `dd/MM/yyyy`); //pesquisar sobre isso

    return(
        <article>
            <h3>{title}</h3>
            <span><b>{userId}</b></span>
            <p>Criado em {date}</p>
            <img src={"https://picsum.photos/200/300?random=" + id} alt="Imagem aleatória" />
            <p>Descrição: {body}</p>
            <p>Curtidas: {voteSum ? voteSum : 0 }</p>
            <button>Like</button>
            <br/>
            <button>Dislike</button>
            <p>Comentários: {commentCout? commentCout : 0}</p>
            <button>Ver Comentários</button>
            <hr/>
        </article>
    )
}