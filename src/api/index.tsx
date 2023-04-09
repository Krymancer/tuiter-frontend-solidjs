const base_url = "http://127.0.0.1:1234"

export async function get(url: string) {
  const response = await fetch(
    base_url + url,
    {
      method: 'GET',
    }
  );

  if(!response.ok) {
    const error = response.status;
    return Promise.reject(error);
  }

  const result = await response.json();
  return result;
}

export async function post(url: string, data?: any, token?: string) {
  const body = JSON.stringify(data);
  const response = await fetch(
    base_url + url,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: body,
    }
  );

  if(!response.ok) {
    const error = response.status;
    return Promise.reject(error);
  }

  const result = await response.json();
  return result;
}

import login from '~/api/login';
import createTweet from './createTwet';
import getTweets from './getTweets';

export default {
  login,
  createTweet, 
  getTweets,
}