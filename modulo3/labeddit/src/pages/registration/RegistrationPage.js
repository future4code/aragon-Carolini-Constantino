import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header"
import useForm from "../../hooks/useForm";
import { goToFeedPage } from "../../routes/coordinator";
import { requestRegistragion } from "../../services/requests";
import { StyleRegistration } from "./style";
import back  from "../../img/back.png"

export default function RegistrationPage() {
    const navigate = useNavigate();

    const {form, onChange, clear} = useForm({name:"", email:"", password:""})
    
    const registration = (e) => {
        e.preventDefault(); //previne q a página não atualize sempre q for digitado uma letrinha.Só é usado em forms
        requestRegistragion(form, clear, navigate)
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token) {
            goToFeedPage(navigate)
        }
    }, [])
    return (
        <>
       
            <Header private={false}/>
            <StyleRegistration>
            <main>
            <h2>Cadastro:</h2>
            <form onSubmit={registration}>
                <label htmlFor="nome">Nome: </label>
                <input
                    id={"nome"}
                    name="name"
                    type={"text"}
                    placeholder={"Nome"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"} //não entendi como funciona esse atributo
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <br />
                <label htmlFor="email">E-mail: </label>
                <input
                    id={"email"}
                    name="email"
                    type={"text"}
                    placeholder={"E-mail"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <br />
                <label htmlFor="senha">Senha: </label>
                <input
                    id={"senha"}
                    name="password"
                    type={"password"}
                    placeholder={"Senha"}
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"} //não entendi mt bem como funciona esse atributo
                    title={"A senha deve ter no mínimo 8 e no máximo 30 caracteres"}
                    required
                />
                <br />
                <button type={"submit"}>Cadastrar</button>
            </form>
            <br />
            </main>
            <img src={back} onClick={() => goToFeedPage(navigate)} />
            </StyleRegistration>
        </>
    )
}