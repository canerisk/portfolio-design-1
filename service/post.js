import {post, get} from './request';

export const getPost = () => get('/post');
export const newPost = (data) => post('/post', data);