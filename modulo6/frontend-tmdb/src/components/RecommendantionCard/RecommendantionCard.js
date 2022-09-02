import { API_IMG } from "../../constants/urls";

export const RecommendantionCard = (props) => {
  return (
    <div>
      <img
        width="200"
        src={`${API_IMG}${props.movie.poster_path}`}
      />
      <p>{props.movie.title}</p>
      <p>{props.movie.release_date}</p>
    </div>
  );
};