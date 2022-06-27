import { useNavigate } from "react-router-dom"
import { goToFeedPage } from "../../routes/coordinator"
import { StyleError } from "./style"

export default function ErrorPage() {
    const navigate = useNavigate();
    
    return(
        <>
        <StyleError>
        <h1>Erro!</h1>
        <button onClick={()=>{goToFeedPage(navigate)}}>Ir para o feed</button>
        <img width="100%" height="100%" src="https://www.mobays.com/Images/404.gif" />
        </StyleError>
        </>
    )
}