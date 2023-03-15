import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

export const signup = async userData => {
  const { data } = await instance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const login = async userData => {
  const { data } = await instance.post('/users/login', userData);
  setToken(data.token);
  return data;
};

export default instance;
