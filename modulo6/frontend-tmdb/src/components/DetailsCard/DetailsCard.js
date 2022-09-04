import { API_IMG } from "../../constants/urls";
import { Main, UpperFild, LowerFild, Trailer } from "./styles";
import { ActorCard } from "../ActorCard/ActorCard";

export const DetailsCard = (props) => {

    const date = new Date(props.release_date);

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

    const recommendantions = props.recommendantions;

    return (
        <Main>
            <UpperFild>
                <img src={`${API_IMG}${props.poster_path}`} />
                <div className="textMovie">
                    <h2>{`${props?.title} (${date.getFullYear()})`}</h2>

                    <p>{props?.release_date} - {nameGenre?.toString()}</p>

                    <p>{conv(props.runtime)}</p>

                    <h4>Avaliação dos usuários</h4>
                    <h5>{props?.votes?.toFixed(1)}</h5>

                    <h3>Sinopse</h3>
                    <p>{props.overview}</p>
                </div>
            </UpperFild>
            <LowerFild>
                <h3>Elenco original</h3>
                <span>
                    {props.cast?.map((casting) => {
                        return <ActorCard casting={casting} />
                    })}
                </span>
            </LowerFild>
            <Trailer>
                <h2>Trailer</h2>
                <iframe
                    src={`https://www.youtube.com/embed/${props?.trailer?.key}`}
                    title="YouTube video player"
                />
            </Trailer>
        </Main>
    );
};
