import axios from 'axios';
import { getCookie } from '../shared/cookies';

const URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const http = axios.create({
  baseURL: URL,
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
