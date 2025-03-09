import loginState from '../states/login_state';
import userState from '../states/user';
import { loginRequest, registerRequest } from '../services/auth';
import { storeUserData } from '../services/userService'; // Import the new service

import registerState from '../states/register_state';

const dummyUser = {
  id: 1,
  username: "testuser",
  token: "dummy_token"
};

interface LoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: string; // JWT token
}

export const login = async (username: string, password: string): Promise<boolean> => {
  loginState.setLoading(true);
  loginState.setError(false);

  try {
    const response: LoginResponse = await loginRequest(username, password);
    
    if (response.success && response.statusCode === 200) {
      localStorage.setItem('auth_token', response.data); // Store token
      loginState.setSuccess(true);
      return true;
    } else {
      throw new Error(response.message || 'Login failed');
    }
  } catch (error) {
    if (error instanceof Error) {
      loginState.setError(true, error.message || 'Login failed');
    } else {
      loginState.setError(true, 'Login failed');
    }
    return false;
  } finally {
    loginState.setLoading(false);
  }
};

export const handleRegister = async ( mobile: string, email: string, password: string, department: string) => {
  registerState.setLoading(true);
  registerState.setError(false);

  try {
    const response = await registerRequest(mobile, email, password, department);
    registerState.setSuccess(true);
    userState.setUser({
      id: response.id,
      username: email,
      token: response.token
    });
    storeUserData(response);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      registerState.setError(true, (error as any).response?.data?.message || 'Registration failed');
    } else {
      registerState.setError(true, 'Registration failed');
    }
    return false;
  } finally {
    registerState.setLoading(false);
  }
};
