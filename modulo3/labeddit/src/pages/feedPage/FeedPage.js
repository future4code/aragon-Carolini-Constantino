import Header from "../../components/Header";
import { Style } from "./style";

export default function FeedPage() {
    return (
        <>
        <Style>
            <Header private={true}/>
            <section>
                <h2>Crie um novo post:</h2>
                <form onSubmit={""}>
                    <label htmlFor={"title"}> Título: </label>
                    <input
                        id={"title"}
                        name={"title"}
                        value={""}
                        onChange={""}
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
                        value={""}
                        onChange={""}
                        pattern={"^.{5,}$"} //????????
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <br />
                    <button type={"submit"}>Criar Post</button>
                </form>
            </section>
            <hr/>
            <section>
                <h2>Feed</h2>
                <nav>
                    <h4>Selecione uma página:</h4>
                    <span>Página XX</span>
                    <button>Próxima página</button>
                </nav>
            </section>
            </Style>
        </>
    )
}