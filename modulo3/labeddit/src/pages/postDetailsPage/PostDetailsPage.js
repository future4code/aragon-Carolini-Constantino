import Header from "../../components/Header";
import { Style } from "./style";

export default function PostDetailsPage() {
    return (
        <>
        <Style>
            <Header private={true} />
            <button onClick={""}>Voltar</button>
            <h2>Informações do post:</h2>
            <>
                key={""}
                post={""}
                isFeed={false}
            </>
            <section>
                <h2>Escreva seu comentário:</h2>
                <form onSubmit={""}>
                    <label htmlFor={"coments"}>Cometário: </label>
                    <input
                        id={"coments"}
                        type={"text"}
                        name={"coments"}
                        value={""}
                        onChange={""}
                        pattern={"^.{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required />
                    <br />
                    <button type={"submit"}>Comentar</button>
                </form>
                <section>
                    <hr />
                    <section>
                        <h2>Lista de comentários:</h2>
                    </section>
                </section>
                </section>
                </Style>
        </>
    )
}