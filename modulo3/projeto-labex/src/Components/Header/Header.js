import { goToAdminPage, goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api_client, base_url } from "../../constants/url";
import styledComponents from "styled-components";

const StyledHeader = styledComponents.div`
button{
      align-items: center;
      background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
      border: 0;
      border-radius: 8px;
      box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
      box-sizing: border-box;
      color: #FFFFFF;
      display: flex;
      font-family: Phantomsans, sans-serif;
      font-size: 15px;
      justify-content: center;
      line-height: 1em;
    width: 5%;
    height:3%;
      padding: 10px 10px;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      cursor: pointer;
    }
    
    .button-63:active,
    .button-63:hover {
      outline: 0;
    }
    
    @media (min-width: 768px) {
      .button-63 {
        font-size: 24px;
        min-width: 196px;
      }
}
h1{
    font-family: Phantomsans, sans-serif;
    font-size: 35px;
    color: #A020F0
}
label{
    font-family: Phantomsans, sans-serif;
    font-size: 15px;
    padding-left: 10px;

}
`

function Header(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleInputValues = (e) => {
        switch (e.target.name) {
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
                        <StyledHeader>
                        <h1>LabeX</h1>
                        <section>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                name="email"
                                type={"text"}
                                value={email}
                                onChange={handleInputValues}
                            ></input>
                         
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
                        </StyledHeader>
                    </div>
                );
            case "adminPage":
                return (
                    <StyledHeader>
                    <button onClick={logout}>Logout</button>
                    </StyledHeader>
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

    const adiminPage = () => {
        goToAdminPage(navigate)
    }
    return (
        <div>
            {renderHeader()}
            <hr />
        </div>
    );
}

export default Header;