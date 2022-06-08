import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "../pages/feedPage/FeedPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PostDetailsPage from "../pages/postDetailsPage/PostDetailsPage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import ErrorPage from "../pages/errorPage/ErrorPage"

export default function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/feed" element={<FeedPage/>} />
            <Route path="/registration" element={<RegistrationPage />}/>
            <Route path={"/post/:postId"} element={<PostDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}