import axios from 'axios';

const API_BASE_URL = 'http://flazzard-001-site1.qtempurl.com';

export const loginRequest = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
    username,
    password
  });
  return response.data;
};

export const registerRequest = async (phone: string, email: string, password: string, organization: string) => {
  const response = await axios.post(`${API_BASE_URL}/api/Account/register`, {
    phone,
    email,
    password,
    organization
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

