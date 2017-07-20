import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const FETCH_COMMENTS = "fetch_comments";
export const FETCH_COMMENT = "fetch_comment";
export const FETCH_USER = "fetch_user";


const ROOT_URL = "https://jsonplaceholder.typicode.com";

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}


export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchComments() {
    const request = axios.get(`${ROOT_URL}/comments`);

    return {
        type: FETCH_COMMENTS,
        payload: request
    };
}

export function fetchComment (id) {
    const request = axios.get(`${ROOT_URL}/comments/${id}`);

    return {
      type: FETCH_COMMENT,
      payload: request
    };
}

export function fetchUserDetail (id) {
    const request = axios.get(`${ROOT_URL}/users/${id}`);

    return {
      type: FETCH_USER,
      payload: request
    };
}

export function fetchCommentByPostId (postId) {
    const request = axios.get(`${ROOT_URL}/comments?postId=${postId}`);

    return {
      type: FETCH_COMMENTS,
      payload: request
    };
}

export function fetchPostforComment (postId) {
    const request = axios.get(`${ROOT_URL}/posts?id=${postId}`);
    return {
      type: FETCH_POSTS,
      payload: request
    };
}
