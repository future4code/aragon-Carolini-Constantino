import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { requestCreatPost } from "../../services/requests";
import { StyleFeed } from "./style";

export default function FeedPage() {

const { form, onChange, clear } = useForm({title: "", body: ""})
    const { states, setters, getters } = useContext(GlobalStateContext);
    const { posts, page, isLoading } = states;
    const { getPosts } = getters;
    const { setPage } = setters;

    useEffect(() => {
        getPosts(page)
    }, []);

    const createPost = (e) => {
        e.preventDefault()
        requestCreatPost(form,  clear, getPosts)

    };

    const changePage = (cp) => {
        const nextPage = page + cp;
        setPage(nextPage)   
        getPosts(nextPage)
    }
    const showPost = posts.length && posts.map((post) => {
        return (
            <PostCard
            key={post.id}
            post={post}
            isFeed={true}
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
                        pattern={"^.{5,}$"}
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
                    {page !== 1 && <button onClick={() => changePage(-1)}>Voltar página</button> }
                    <span>Página {page} </span>
                    {posts.length && <button onClick={() => changePage(1)}>Próxima página</button>}
                </nav>
                {isLoading ? <p>Carregando...</p>: showPost}
            </main>
            </StyleFeed>
        </>
    )
};