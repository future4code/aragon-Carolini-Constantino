export const BASE_URL="https://labeddit.herokuapp.com";

export const HEADER= {
    headers: {
        authorization: localStorage.getItem("token")
    }
};
