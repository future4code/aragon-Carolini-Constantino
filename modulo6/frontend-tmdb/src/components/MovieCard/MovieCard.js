import { useNavigate } from "react-router-dom";
import { API_IMG } from "../../constants/urls";
import { goToMovie } from "../../routes/coordinator";
import { Card } from "./styles"

export const MovieCard = (props) => {
    const navigate = useNavigate()

    return (
        <Card>
            <img
                onClick={() => goToMovie(navigate, props.movie_id)}
                src={`${API_IMG}${props.poster_path}`}
            />
            <h3>{props.title}</h3>
            <p>{props.release_date}</p>
        </Card>
    )
}