import { useNavigate } from "react-router-dom";
import { API_IMG } from "../../constants/urls";
import { goToMovie } from "../../routes/coordinator";
import { Card } from "./styles"

export const MovieCard = (props) => {
    const navigate = useNavigate()

    return (
        <Card>
            <img
                onClick={() => goToMovie(navigate, props.movie.id)}
                src={`${API_IMG}${props.movie.poster_path}`}
            />
            <h3>{props.movie.title}</h3>
            <p>{props.movie.release_date}</p>
        </Card>
    )
}