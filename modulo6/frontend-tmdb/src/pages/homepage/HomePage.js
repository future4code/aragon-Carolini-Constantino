import { useRequestData } from "../../hooks/useRequestData";
import Header from "../../components/Header/Header";
import { API_KEY, BASE_URL } from "../../constants/urls";
import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Main, LowerFild, Pagination, UpperFild } from "./style";
import { getDefaultNormalizer } from "@testing-library/react";
import { id } from "date-fns/locale";

export default function HomePage() {

    const [data] = useRequestData(`${BASE_URL}genre/movie/list?${API_KEY}`, []);

    const genres = data.genres;

    const [genre, setGenre] = useState(null);

    const [page, setPage] = useState(1);

    const [movie] = useRequestData(`${BASE_URL}movie/top_rated?${API_KEY}&page=${page}`, []);

    const topRated = movie.results

    const changePage = (num) => {
        const nextPage = page + num;
      
        setPage(nextPage);
    };

    return (
        <Main>
            <Header></Header>

            <UpperFild>
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
                <div className="genre">
                    <p>FILTRE POR:</p>
                    {genres?.map((obj) => {
                        return (
                            <button key={obj.id} onClick={() => {
                                if (genre !== null) {
                                    setGenre(null)
                                };
                                setGenre(obj.id)
                            }}>{obj.name}</button>
                        );
                    })}
                </div>
            </UpperFild>
            <LowerFild>
                {topRated
                    ? topRated.filter((movie) => {
                        if (genre === null) {
                            return movie.id;
                        }

                        return movie?.genre_ids.includes(genre)
                    })
                        .map((movie) => {
                            const idMovie = movie.id
                            const poster_path = movie.poster_path
                            const title = movie.title
                            const release_date = movie.release_date

                            return <MovieCard
                            movie_id = {idMovie}
                            poster_path = {poster_path}
                            title = {title}
                            release_date = {release_date}
                            ></MovieCard>
                        }) : <p>...loading</p>}
            </LowerFild>
            <Pagination>
                {(page > 1 && <p onClick={() => changePage(-1)}>-</p>)}
                <p>PAGE {page}</p>
                {(<p onClick={() => changePage(1)}>  +</p>)}
            </Pagination>
        </Main>
    )
}
