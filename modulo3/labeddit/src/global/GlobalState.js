import axios from "axios";
import { useState } from "react";
import { BASE_URL, HEADER } from "../constants/urls"
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [page, setPage] = useState(1);
  const [postComments, setPostComments] = ([])
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = (currentPage) => {
    setIsLoading(true)
    axios
      .get(`${BASE_URL}/posts?page=${currentPage}&size=10`, HEADER)
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPostComments = (postId) => {
    setIsLoading(true)
    axios
      .get(`${BASE_URL}/posts/${postId}/comments`, HEADER)
      .then((res) => {
        setPostComments(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { posts, post, postComments, page, isLoading }
  const setters = { setPosts, setPost, setPostComments, setPage, setIsLoading }
  const getters = { getPosts, getPostComments }

  return (
    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;