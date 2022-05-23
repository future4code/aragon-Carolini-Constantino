import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../Pages/AdminPage/AdminPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";

function Router() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<HomePage/>} />
          <Route path={"/admin"} element={<AdminPage/>} />
          <Route path={"*"} element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;