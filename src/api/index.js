import { AppsTwoTone } from '@material-ui/icons';
import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:3001' });

API.interceptors.request.use(req => {
  // Do something before request is sent ...
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = page => API.get(`/posts?page=${page}`);

export const fetchPostsBySearch = searchQuery =>
  API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const likePost = id => API.patch(`/posts/${id}/likePost`);
export const deletePost = id => API.delete(`/posts/${id}`);
