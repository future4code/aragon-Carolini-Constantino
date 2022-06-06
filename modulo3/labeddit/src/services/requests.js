import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator";

export const requestLogin = (form, clear, navigate) =>  {
    
    const body = {
        email: form.email,
        password: form.password
    };

    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userEmail", form.email);
        alert("Login realizado com sucesso")
        goToFeedPage(navigate)
    })
    .catch((err) => {
        alert("Tente novamente! Email e/ou senha inválidos!")
        clear()
    })
};
