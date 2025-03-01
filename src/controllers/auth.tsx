import loginState from '../states/login_state';
import userState from '../states/user';
import { dummyLoginRequest, dummyRegisterRequest } from '../services/auth';
import { storeUserData } from '../services/userService'; // Import the new service

import registerState from '../states/register_state';

const dummyUser = {
  id: 1,
  username: "testuser",
  token: "dummy_token"
};

export const login = async (username: string, password: string) => {
  loginState.setLoading(true);
  loginState.setError(false);

  try {
    const response = await dummyLoginRequest(username, password);
    loginState.setSuccess(true);
    userState.setUser(dummyUser);
    storeUserData(dummyUser); // Store user data on successful login
  } catch (error) {
    loginState.setError(true, error.message);
  } finally {
    loginState.setLoading(false);
  }
};

export const handleRegister = async (name: string, mobile: string, email: string, department: string) => {
  registerState.setLoading(true);
  registerState.setError(false);

  try {
    const response = await dummyRegisterRequest(name, mobile, email, department);
    registerState.setSuccess(true);
    userState.setUser(dummyUser);
    storeUserData(dummyUser); // Store user data on successful registration
  } catch (error) {
    registerState.setError(true, error.message);
  } finally {
    registerState.setLoading(false);
  }
};
