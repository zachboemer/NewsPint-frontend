import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://your-app-name.herokuapp.com',
});

export default api;