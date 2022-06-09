import axios from "axios";
import { BASE_URL, HEADER } from "../constants/urls"
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

    axios
        .post(`${BASE_URL}/posts`, body, HEADER)
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
};

export const requestCreateComment = (form, clear, getPostsComments, postId) => {
        const body = {
            body: form.body
        };

        axios
        .post(`${BASE_URL}/posts/${postId}/comments`, body, HEADER)
        .then((res) => {
            alert(res.data);
            getPostsComments(postId)
            clear();
        })
        .catch((err) => {
            console.log(err.message)
        })
};

export const requestCreatePostLike = (postId, direction,getPosts) => {
    const body = {
        direction: -1
    };
    axios
    .post(`${BASE_URL}/posts/${postId}/votes`, body,HEADER)
    .then(() => {
        alert("Like registrado com sucesso");
        getPosts()
    })
    .catch((err) => {
        console.log(err.message)
    }) 
};

export const requestChangePostLike = (postId, direction, getPosts) => {
    const body = {
        direction: -1
    };
    axios(`${BASE_URL}/posts/${postId}/votes`, body, HEADER)
    .put
    .then(() => {
        alert("Voto modificado com sucesso!");
        getPosts();
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const requestDeletePostLike = (postId, getPosts) => {

    axios
    .delete(`${BASE_URL}/posts/${postId}/votes`, HEADER)
    .then(() => {
        alert("Like removido com sucesso!");
        getPosts()
    })
    .catch((err) => {
        console.log(err.message)
    })
};

export const requestChangeCommentVote = (commentId, direction, getPostComments, postId) => {
    const body = {
        direction: -1
    };
    axios
    .put(`${BASE_URL}/comments/${commentId}/votes`, body, HEADER)
    .then((res) => {})
    alert("Voto modificado com sucesso!");
    getPostComments(postId)
    .catch((err) => {
        console.log(err.message)
    })
};

export const requestCreateCommentVote = (commentId, direction, getPostComments, postId) => {
    const body = {
        direction: -1
    };
    axios
    .post(`${BASE_URL}/comments/${commentId}/votes`, body, HEADER)
    .then((res) => {
        alert("Voto registrado com sucesso!");
        getPostComments(postId)
    })
    .catch((err) => {
        console.log(err.message)
    })
};

export const requestDeleteCommentVote = (commentId, getPostComments, postId) => {

    axios
    .del(`${BASE_URL}/post/${commentId}/votes`, HEADER)
    .then(() => {
        alert("Voto removido com sucesso!");
        getPostComments(postId)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

/* export const NOME = () => {

    axios
    .???(`${BASE_URL})
    .then((res) => {})
    .catch((err) => {
        console.log(err.message)
    })
} */