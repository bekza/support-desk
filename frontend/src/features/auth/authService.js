import axios from 'axios';

const API_URL = '/api/users';

// Register user
export const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout
export const logout = () => localStorage.removeItem('user');

// Login
export const login = async (user) => {
  const response = await axios.post(API_URL + '/login', user);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
