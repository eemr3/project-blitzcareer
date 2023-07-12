import axios from 'axios';
import { getCookie } from '../shared/cookies';

export const http = axios.create({
  baseURL: 'http://localhost:3001',
});

http.interceptors.request.use((request) => {
  if (!process.browser) {
    return request;
  }

  const token = getCookie('access_token');

  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }

  return request;
});
