import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { GamePage } from "../pages/gamePage/GamePage";

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