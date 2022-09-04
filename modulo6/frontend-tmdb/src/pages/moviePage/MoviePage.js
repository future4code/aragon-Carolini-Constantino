import { useParams } from "react-router-dom";
import { DetailsCard } from "../../components/DetailsCard/DetailsCard";
import { Body } from "./style"
import Header from "../../components/Header/Header";
import { API_DETAIL, API_KEY } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";



export default function MoviePage() {

        const params = useParams();

        const [movie] = useRequestData(`${API_DETAIL}${params.movie_id}?${API_KEY}`, []);

        const title = movie?.original_title

        const release_date = movie?.release_date

        const runtime = movie?.runtime

        const votes = movie?.vote_average

        const overview = movie?.overview

        const poster_path = movie?.poster_path

        const [credits] = useRequestData(`${API_DETAIL}${params.movie_id}/credits?${API_KEY}`, []);

        const cast = credits?.cast?.slice(0, 10)

        const [video] = useRequestData(`${API_DETAIL}${params.movie_id}/videos?${API_KEY}`);

        const trailer = video?.results[0]

        return (
                <main>
                        <Header></Header>
                        <Body>
                                <DetailsCard
                                        movie={movie}
                                        poster_path={poster_path}
                                        title={title}
                                        release_date={release_date}
                                        runtime={runtime}
                                        votes={votes}
                                        overview={overview}
                                        cast={cast}
                                        trailer={trailer}
                                />
                        </Body>
                </main>
        )
}