import axios from "axios";
export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const createPost = (values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
};
export const fetchPost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
};
