import * as Axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const axios = Axios.default.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axios.interceptors.request.use((config) => {
  console.log(`[프론트] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});
