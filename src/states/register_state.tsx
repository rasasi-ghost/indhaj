import { makeAutoObservable } from 'mobx';

class RegisterState {
  loading = false;
  success = false;
  error = false;
  errorMessage = '';

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setSuccess(success: boolean) {
    this.success = success;
  }

  setError(error: boolean, message: string = '') {
    this.error = error;
    this.errorMessage = message;
  }
}

const registerState = new RegisterState();
export default registerState;
