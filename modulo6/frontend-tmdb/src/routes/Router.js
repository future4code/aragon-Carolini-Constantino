import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import HomePage from "../pages/homepage/HomePage";
import MoviePage from "../pages/moviePage/MoviePage";

export default function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/movie/:movie_id" element={<MoviePage/>}/>
        </Routes>
        </BrowserRouter>
    )
}