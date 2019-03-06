import axios from 'axios';
const baseUrl = 'https://home-pages-backend.herokuapp.com/api/truthOrDare';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
};

export default { getAll };