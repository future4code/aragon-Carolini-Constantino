import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { requestCreatPost } from "../../services/requests";
import { StyleFeed } from "./style";

export default function FeedPage() {

const { form, onChange, clear } = useForm({title: "", body: ""})
    const { states, getters } = useContext(GlobalStateContext);
    const { posts } = states;
    const { getPosts } = getters;

    useEffect(() => {
        getPosts()
    }, []);

    const createPost = (e) => {
        e.preventDefault()
        requestCreatPost(form,  clear, getPosts)

    }
    const showPost = posts.length && posts.map((post) => {
        return (
            <PostCard
            key={post.id}
            post={post}
            />
        )
    })
    return (
        <>
        <StyleFeed>
            <Header private={true}/>
            <section className="formCreatePost">
                <h3>Crie um novo post:</h3>
                <form onSubmit={createPost}>
                    <label htmlFor={"título"}> Título: </label>
                    <input
                        id={"título"}
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        pattern={"^.{5,}$"} //???????
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <br />
                    <label htmlFor={"body"}> Texto do post: </label>
                    <input
                        id={"body"}
                        type={"text"}
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        pattern={"^.{5,}$"} //????????
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <br />
                    <button type={"submit"}>Criar Post</button>
                </form>
            </section>

            <main>
                <h2>Feed</h2>
                <nav>
                    <h4>Selecione uma página:</h4>
                    <span>Página XX </span>
                    <button>Próxima página</button>
                </nav>
                {showPost}
            </main>
            </StyleFeed>
        </>
    )
}