import { useParams } from "react-router-dom";
import { API_DETAIL, API_IMG, API_KEY } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { Main, UpperFild, LowerFild, Trailer, Actor } from "./styles";
import { Recommendation } from "../RecommendationCard/styles"
import { ActorCard } from "../ActorCard/ActorCard";

export const DetailsCard = (props) => {
 
    const date = new Date(props.movie.release_date);

    const genre = props.movie

    const nameGenre = genre.length !== 0 ? (
        genre.genres.map((genre) => {
            return genre.name;
        })
    ) : (<p>...carregando</p>);

    const conv = (minutes) => {
        const hrs = Math.floor(minutes / 60)
        const min = minutes % 60
        const horas = `00${hrs}`.slice(-2)
        const minutos = `00${min}`.slice(-2)

        return `${horas}h ${minutos}min`
    }

    const [video] = useRequestData(API_DETAIL, `${props.movie.id}/videos?${API_KEY}`);

    const votes = props.movie.vote_average;
    const [credits] = useRequestData(API_DETAIL, `${props.movie.id}/credits?${API_KEY}`, []);
    const params = useParams()
    const [recommendantions] = useRequestData(API_DETAIL,`${params.idMovie}/recommendations?${API_KEY}`, [])
    const trailer = video?.results[0]

    return (
        <Main>
            <UpperFild>
                <img src={`${API_IMG}${props.movie?.poster_path}`} />
            <div className="textMovie">
            <h2>{`${props.movie?.title} (${date.getFullYear()})`}</h2>

            <p>{props.movie?.release_date} - {nameGenre?.toString()}</p>

            <p>{conv(props.movie.runtime)}</p>

            <h4>Avaliação dos usuários</h4>
            <p>{votes?.toFixed(1)}</p>

            <h3>Sinopse</h3>
            <p>{props.movie?.overview}</p>
            </div>
            </UpperFild>
            
            <LowerFild>
            <h3>Elenco original</h3>
            {credits?.cast?.slice(0, 10).map((casting) => {
                return <ActorCard casting={casting}/>
            })}
            </LowerFild>

            <Trailer>
            <h2>Trailer</h2>
                <iframe
                src={`https://www.youtube.com/embed/${trailer?.key}`}
                title="YouTube video player"
                />
            </Trailer>

            <Recommendation>
            <h4>Recomendações</h4>
                {recommendantions.results?.map(movie => {
                    return (
                    <>
                    <img  
                    width= "200" 
                    src={`${API_IMG}${movie.poster_path}`}/>
                    <p>{movie.title}</p>
                    <p>{movie.release_date}</p>
                    </>
                    )
                })}
            </Recommendation>
            
        </Main>
    );
};
