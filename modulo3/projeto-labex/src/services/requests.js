import axios from "axios"
import { api_client, base_url } from "../constants/url"
import { goToAdminPage } from "../routes/coordinator"

export const requestLogin = (email, password, navigate) => {
    const body = {
        email,
        password,
    }
    axios.post(`${base_url}${api_client}/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Você está logado!")
        goToAdminPage(navigate)
    })
    .catch((err) => {
        alert(err.message)
    })
};

export const createTrip = (url, body, clear, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios.post(url, body,  header)
    .then(() => {
        alert("Viagem criada!")
        clear();
        getTripsData();
    })
    .catch((err) => {
        alert(err.message)
    })
}