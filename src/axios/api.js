import axios from 'axios';
// import runtimeEnv from '@mars/heroku-js-runtime-env' ; 
// const env = runtimeEnv(); 

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    if (user) {
      config.headers.Authorization = user.token;
    }
    return config;
  } catch (err) {
    console.log('err', err);
  }
});

export default api;
