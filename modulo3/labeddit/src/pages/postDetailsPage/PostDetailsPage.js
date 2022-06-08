import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommentCard } from "../../components/CommentCard";
import Header from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToFeedPage } from "../../routes/coordinator";
import { requestCreateComment } from "../../services/requests";
import { StyleDetails } from "./style";

export default function PostDetailsPage() {
    
    const navigate = useNavigate();

    const params = useParams()

    const {form, onChange, clear} = useForm({body: ""});

    const {states, getters} = useContext(GlobalStateContext);
    
    const {post, postComments, isLoading} = states;

    const {getPostComments} = getters;

    useEffect(() => {
        if (post.id && post.id === params.postId) {
            getPostComments(post.id)
        }else {
            alert("Houve um erro")
        goToFeedPage(navigate)}
    }, []);
    
    const createComment = (e) => {
        e.preventDefault()
        requestCreateComment(form, clear, getPostComments, post.id)
    };

    const showComments = postComments.length ? postComments.map((comment) => {
        return(
            <CommentCard 
            key={comment.id}
            comment={comment}
            />
        )
    })  : <p>Não há comentários para este post. Seja a primeira pessoa a comentar!</p>

return (
        <>
        <StyleDetails>
            <Header private={true} />
            <button onClick={() => navigate(-1)}>Voltar</button>
           
            <section>
            <h2>Informações do post:</h2>
            <PostCard
                key={post.id}
                post={post}
                isFeed={false}
            />
            </section>
            <section>
                <h2>Escreva seu comentário:</h2>
                <form onSubmit={createComment}>
                    <label htmlFor={"coments"}>Cometário: </label>
                    <input
                        id={"coments"}
                        type={"text"}
                        name={"coments"}
                        value={""}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required />
                    <br />
                    <button type={"submit"}>Comentar</button>
                </form>
                <section>
                    <hr />
                    <section>
                <h2>Lista de Comentários</h2>
                {/* Renderização condicional de comentários somente quando requisição encerra. */}
                {isLoading ? <p>CARREGANDO...</p> : showComments}
            </section>
                </section>
            </section>
                </StyleDetails>
        </>
    )
}