import axios from 'axios';

// api url
export const url = process.env.REACT_APP_API_URL || 'http://localhost:8003';

// instance of axios to use it everywhere
const instance = axios.create({
  baseUrl: url,
});

export default instance;
