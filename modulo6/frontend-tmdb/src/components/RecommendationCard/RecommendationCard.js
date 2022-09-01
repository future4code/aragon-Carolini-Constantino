import { API_IMG } from "../../constants/urls";
import { Recommendations } from "./styles";

export const RecommendentionCard = (props) => {
    return (
      <>
      <img  
      width= "200" 
      src={`${API_IMG}${props.movie.poster_path}`}/>
      <p>{props.movie.title}</p>
      <p>{props.movie.release_date}</p>
      </>
    );
  };
  