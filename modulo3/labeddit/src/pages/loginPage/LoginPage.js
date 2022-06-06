import Header from "../../components/Header";
import { Style } from "./style";
import useForm from '../../hooks/useForm';
import { requestLogin } from "../../services/requests";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const {form, onChange, clear} = useForm({email:"", password:""})
    
    const login = (e) => {
        e.preventDefault();
        requestLogin(form, clear, navigate)
    }

    return (
        <>
        <Style>
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
                    onChange={onChange} />
                <br />
                <label htmlFor={"password"}>Senha: </label>
                <input
                    id={"password"}
                    type={"text"}
                    name={"password"}
                    placeholder={"Senha"}
                    value={form.password}
                    onChange={onChange} />
                <br />
                <button type={"submit"}>Entrar</button>
            </form>
            <hr />
            <section>
                <h3>Não tem acesso? Crie seu cadastro!</h3>
                <button onClick={() => { "" }}>Me cadastrar</button>
            </section>
            <hr />
            </Style>
        </>
    )
}