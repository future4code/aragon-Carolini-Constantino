import { navigate } from "react-router-dom";

export const goToFeedPage = (navigate) => { navigate("/feed") };
export const goToLoginPage = (navigate) => { navigate("/login") };
export const goToRegistration = (navigate) => { navigate("/registration") };
export const goToPostDetails = (navigate, postId) => { navigate(`/post/${postId}`) } //arrumar