import axios from 'axios';

// api url
export const url = process.env.REACT_APP_API_URL || 'https://nutriyummy-ahmad-abu-osbeh.herokuapp.com';

// instance of axios to use it everywhere
const instance = axios.create({
  baseUrl: url,
});

export default instance;
