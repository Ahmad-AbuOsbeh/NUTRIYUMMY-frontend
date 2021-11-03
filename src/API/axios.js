import axios from 'axios';

// api url
export const url = 'https://nutriyummy-ahmad-abu-osbeh.herokuapp.com';

// instance of axios to use it everywhere
const instance = axios.create({
  baseUrl: url,
});

export default instance;
