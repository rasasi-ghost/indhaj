import { makeAutoObservable } from "mobx";

class LoginState {
  isLoading = false;
  isSuccess = false;
  isError = false;
  errorMessage = "";

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
}

const loginState = new LoginState();
export default loginState;