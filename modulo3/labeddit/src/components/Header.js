import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";
import styled from "styled-components";
import { useEffect } from "react";

const Style = styled.div`
h1{
    color: #694b49;
    font-size: xxx-large;
}

h4{
    color: #694b49;

}

button{
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #694b49;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 2rem;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

button:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

button:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

button:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

alert{
    
}
`

export default function Header(props) {

    const navigate = useNavigate();

    const token = localStorage.getItem("token")

    const logout = () => {
        if(window.confirm("Tem certeza que deseja sair?")) {
            localStorage.removeItem("token");
            localStorage.removeItem("userEmail");
            goToLoginPage(navigate);
            alert("Logout com sucesso!")
        }
    };

    return(
        <>
        <Style>
        <h1>LabEddit</h1>
        {props.private && (
            <>
            <h4>Bem vinde {localStorage.getItem("userEmail")}!</h4>
            <button onClick={logout}>Logout</button>
            </>
        )}
        <hr/>
        </Style>
        </>
    )
}