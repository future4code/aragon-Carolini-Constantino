import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator";

export const requestLogin = (form, clear, navigate) => {

    const body = {
        email: form.email,
        password: form.password
    };

    axios
        .post(`${BASE_URL}/users/login`, body)
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

export const requestCreatPost = (form, clear, getPosts) => {
    const body = {
        "title": form.title,
        "body": form.body
    };

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    };

    axios
        .post(`${BASE_URL}/posts`, body, header)
        .then((res) => {
            alert(res.data);
            getPosts();
            clear();
        })
        .catch((err) => {
            console.log(err.message);
        })
}

export const requestRegistragion = (form, clear, navigate) => {
    const body = {
        username: form.name,
        email: form.email,
        password: form.password
    };

    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userEmail", form.email);
            alert("Usuário criado com sucesso! Seja bem-vindo!");
            goToFeedPage(navigate);
        })
        .catch((err) => { 
            alert("Algo deu errado! Tente novamente");
            console.log(err)
            clear();
        })
}