import { makeAutoObservable } from "mobx";

class LoginState {
  isLoading = false;
  isSuccess = false;
  isError = false;
  errorMessage = "";
  token: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  setSuccess(success: boolean) {
    this.isSuccess = success;
  }

  setError(error: boolean, message: string = "") {
    this.isError = error;
    this.errorMessage = message;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  clearToken() {
    this.token = "";
    localStorage.removeItem('auth_token');
  }
}

const loginState = new LoginState();
export default loginState;