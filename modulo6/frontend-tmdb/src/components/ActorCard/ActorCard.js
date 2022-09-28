import { API_IMG } from "../../constants/urls"
import { Main } from "./styles"

export const ActorCard = (props) => {
    return (
        <Main>
            <img src={`${API_IMG}${props?.casting?.profile_path}`} />
            <h3>{props?.casting?.name}</h3>
            <p>{props?.casting?.character}</p>
        </Main>
    )
}