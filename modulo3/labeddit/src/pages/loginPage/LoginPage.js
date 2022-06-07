import Header from "../../components/Header";
import { StyleLogin } from "./style";
import useForm from '../../hooks/useForm';
import { requestLogin } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToRegistration } from "../../routes/coordinator";
import { useEffect } from "react";

export default function LoginPage() {

    const navigate = useNavigate();

    const {form, onChange, clear} = useForm({email:"", password:""})
    
    const login = (e) => {
        e.preventDefault(); //previne q a página não atualize sempre q for digitado uma letrinha.Só é usado em forms
        requestLogin(form, clear, navigate)
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token) {
            goToFeedPage(navigate)
        }
    }, [])
    return (
        <>
        <StyleLogin>
            <Header private={false}/>
            <h2>Login</h2>
            <form onSubmit={login}>
                <label htmlFor={"email"}>Email: </label>
                <input
                    id={"email"}
                    type={"text"}
                    name={"email"}
                    placeholder={"Email"}
                    value={form.email}
                    onChange={onChange} 
                    required />
                <br />
                <label htmlFor={"senha"}>Senha: </label>
                <input
                    id={"senha"}
                    type={"password"}
                    name={"password"}
                    placeholder={"Senha"}
                    value={form.password}
                    onChange={onChange} 
                    required />
                <br />
                <button type={"submit"}>Entrar</button>
            </form>
            <hr />
            <section>
                <h3>Não tem acesso? Crie seu cadastro!</h3>
                <button onClick={() => goToRegistration(navigate)}>Me cadastrar</button>
            </section>
            <hr />
            </StyleLogin>
        </>
    )
}