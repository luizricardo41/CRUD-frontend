import axios from 'axios';

const BASE_URL = 'http://localhost:3000/users';

const apiAxios = axios.create({
  baseURL: BASE_URL
});

export default apiAxios;
