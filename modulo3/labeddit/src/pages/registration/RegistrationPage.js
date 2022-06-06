import Header from "../../components/Header"
import { Style } from "./style"

export default function RegistrationPage() {
    return (
        <>
        <Style>
            <Header private={false}/>
            <h2>Cadastro:</h2>
            <form onSubmit={""}>
                <label htmlFor="name">Nome: </label>
                <input
                    id={"name"}
                    type={"text"}
                    placeholder={"Nome"}
                    value={""}
                    onChange={""}
                    pattern={"^.{3,}$"} //não entendi como funciona esse atributo
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <br />
                <label htmlFor="name">E-mail: </label>
                <input
                    id={"email"}
                    type={"text"}
                    placeholder={"E-mail"}
                    value={""}
                    onChange={""}
                    required
                />
                <br />
                <label htmlFor="name">Senha: </label>
                <input
                    id={"password"}
                    type={"text"}
                    placeholder={"Senha"}
                    value={""}
                    onChange={""}
                    pattern={"^.{8,30}$"} //não entendi como funciona esse atributo
                    title={"A senha deve ter no mínimo 8 e no máximo 30 caracteres"}
                    required
                />
                <br />
                <button type={"submit"}>Cadastrar</button>
            </form>
            <br />
            <button onClick={() => { "" }}>Voltar</button>
            </Style>
        </>
    )
}