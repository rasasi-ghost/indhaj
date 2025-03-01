import { makeAutoObservable } from "mobx";



class UserState {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: any) {
    this.user = user;
  }

  clearUser() {
    this.user = null;
  }
}

const userState = new UserState();
export default userState;