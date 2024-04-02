// @ts-ignore
import axios from 'axios';

import cache from './cache';

const apiUrl = process.env.API_BASE_URL;
const apiUsername = process.env.API_USERNAME;
const apiPassword = process.env.API_PASSWORD;
const API_ACCESS_TOKEN_CACHE_KEY = 'api-access-token';


const login = async () => {

  let cachedToken = await cache.get(API_ACCESS_TOKEN_CACHE_KEY);

  if (cachedToken) {
    return cachedToken;
  }

  console.log('>>api_url<<', apiUrl, apiUsername, apiPassword);
  const response = await axios.post(`${apiUrl}/auth/local`, {
    identifier: apiUsername,
    password: apiPassword,
  });
  const {data = {}} = response || {};
  console.log('>>data<<', data);
  ({jwt: cachedToken} = data);
  await cache.set(API_ACCESS_TOKEN_CACHE_KEY, cachedToken || '');
  await cache.expire(API_ACCESS_TOKEN_CACHE_KEY, 60 * 60 * 24);

  return cachedToken;
};

export default login;
