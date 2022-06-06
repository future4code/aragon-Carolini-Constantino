import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

export default function Header(props) {

    const navigate = useNavigate();

    const logout = () => {
        if(window.confirm("Tem certeza que deseja sair?")) {
            localStorage.removeItem("token");
            localStorage.removeItem("userEmail");
            goToLoginPage(navigate);
            alert("Logout com sucesso!")
        }
    }
    return(
        <>
        <h1>LabEddit</h1>
        {props.private && (
            <>
            <h4>Bem vinde {localStorage.getItem("userEmail")}!</h4>
            <button onClick={logout}>Logout</button>
            </>
        )}
        <hr/>
        </>
    )
}