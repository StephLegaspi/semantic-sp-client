import axios from 'axios';

export const getSession = () => {
  return axios.get('/v1/session/user');
};