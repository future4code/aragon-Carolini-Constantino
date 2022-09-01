import { useRequestData } from "../../hooks/useRequestData";
import Header from "../../components/Header/Header";
import { API_KEY, BASE_URL } from "../../constants/urls";
import { useState } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Main, LowerFild, Pagination, UpperFild } from "./style";

export default function HomePage() {

    const [data] = useRequestData(BASE_URL, `genre/movie/list?${API_KEY}`, [])
    const genres = data.genres
    const [genre, setGenre] = useState(null)
    const [page, setPage] = useState(1)
    const [movies] =useRequestData(BASE_URL, `movie/top_rated?${API_KEY}&page=${page}`, [])
    const topRated = movies.results


    const changePage = (num) => {
        const nextPage = page + num
        setPage(nextPage)
    }
    return (
        <Main>
            <Header></Header>

            <UpperFild>
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>

            <div className="genre">
                <p>FILTRE POR:</p>
                {genres?.map((obj) => {
                    return (
                        <button onClick={() => { if(genre !== null){
                            setGenre(null)};
                            setGenre(obj.id)
                        }}>{obj.name}</button>
                    );
                })}
            </div>
            </UpperFild>

            <LowerFild>
                {topRated
                    ? topRated.filter((movie) => {
                        if(genre === null){
                            return movie.id;
                        }

                        return movie?.genre_ids.includes(genre)})
                        .map((movie) => {
                            return <MovieCard movie={movie}></MovieCard>
                        }) : <p>...loading</p>}
            </LowerFild>
            
                <Pagination>
                    {(page > 1 && <p onClick={() => changePage(-1)}>-</p>)}
                    <p>  Page: {page}</p>
                    {(<p onClick={() => changePage(1)}>  +</p>)}
                </Pagination>
            
        </Main>
    )
}
