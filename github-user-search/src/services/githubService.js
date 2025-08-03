import axios from 'axios';

const token = import.meta.env.VITE_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};
