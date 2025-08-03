import axios from 'axios';

export async function fetchUserData(username) {
  const resp = await axios.get(`https://api.github.com/users/${username}`);
  return resp.data;
}
