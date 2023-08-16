import config from '../../config';
import axios from 'axios';

const api = axios.create({
  baseURL: config.BASE_API_URL,
});

export default api;
