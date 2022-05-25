import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../Pages/AdminPage/AdminPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import LabexDetailsPage from "../Pages/LabexDetailsPage"
/*1-Começo criando as pages;
2-Crio as rotas (abaixo), pois elas que vão me dizer pra onde vai caso
a url mude
3-vá para o Header, pois é lá que vai ser decidio qual page renderizar
*/
function Router() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<HomePage/>} />
          <Route path={"/admin"} element={<AdminPage/>} />
          <Route path={"*"} element={<ErrorPage/>} />
          <Route path={"/admin/trips/:id"} element={<LabexDetailsPage/>} />
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;