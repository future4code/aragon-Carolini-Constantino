import { Main } from "./styles"

export const ActorCard = (props) => {
    <Main>
        <img
            width="200"
            padding="18%"
            src={`${API_IMG}${props.casting.profile_path}`} />
        <h3>{props.casting.name}</h3>
        <p>{props.casting.character}</p>
    </Main>
}