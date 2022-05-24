import { goToAdminPage, goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api_client, base_url } from "../../constants/url";

/*3-aqui é criado a função para renderizar a page
NOTA-SE que dentro da função estamos chamando a actualPage por props
(ela será enviada dentro da tag <Header/> em cada pág)
4-Conforme altera apágina, altera o button tbm, e dentro de cada um é passado um onClick que
será responsável por definir a rota de navegação por meio do método "goToPage"
5-A função "goToPage" não está nessa para, ela está sendo importada do "coordinator"
onde terá "os atalhos" que serão utilizado 
6-Mas é importante não esquecer da const navigate que passará o useNavigate como parâmetro para a função "goToPage"
o "useNavigate" é responsável pela navegação
7-vá para coordinator*/
function Header(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleInputValues = (e) => { //método para controlar os inputs
        switch (e.target.name){
            case "email":
                return setEmail(e.target.value);
                case "password":
                    return setPassword(e.target.value);
                    default:
                        return;
        }
    };

    const login = () => {
        const body = {
            email,
            password
        };
        axios.post(
            `${base_url}${api_client}/login`, body
        )
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            console.log(res.data.token)
            goToAdminPage(navigate)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const renderHeader = () => {
        switch (props.actualPage) {
            case "homePage":
                return (
                    <div>
                        <section>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                name="email"
                                type={"text"}
                                value={email}
                                onChange={handleInputValues}
                            ></input>
                            <br/>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                name="password"
                                type={"password"}
                                value={password}
                                onChange={handleInputValues}
                            ></input>
                        </section>
                        <section>
                        <button onClick={login}>Sing in</button>
                        </section>
                    </div>
                );
            case "adminPage":
                return (
                    <button onClick={logout}>Logout</button>
                );
            default:
                return;
        };
    };

    const logout = () => {
        localStorage.removeItem("token");
        goToHomePage(navigate);
        console.log("token removido");
    };

    return (
        <div>
            
            <h1>LabeX</h1>
          {renderHeader()} 
            <hr />
        </div>
    );
}

export default Header;