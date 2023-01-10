import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_PUBLIC_BASE_URL,
});

export default Axios;
