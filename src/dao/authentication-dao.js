import {
  waseelClient as api
} from './providers/axios';

export const daoLoginPost = (payload) => api.post('/login', payload);

export default {
  daoLoginPost
};