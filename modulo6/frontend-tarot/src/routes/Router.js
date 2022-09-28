import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "../pages/gamePage/GamePage";
import { Home } from "../pages/home/Home";

export default function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<GamePage/>}/>
        </Routes>
        </BrowserRouter>
    )
}