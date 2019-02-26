import Vue from "vue";
import { AxiosResponse } from "axios";
import { LoginManager } from "./login";

class User {
  private isLoggedIn_: boolean = false;

  constructor() {}

  public isLoggedIn(): boolean {
    return this.isLoggedIn_;
  }

  public async login(
    details: LoginManager.LoginDetails
  ): Promise<LoginManager.LoginResponse> {
    let result = await LoginManager.Login.login(details);
    if (result.failed) {
      this.loginFailed();
    } else {
      this.loginSuccess(result);
    }

    return result;
  }

  public async register(
    details: LoginManager.RegistrationDetails
  ): Promise<LoginManager.LoginResponse> {
    let result = await LoginManager.Login.register(details);
    if (result.failed) {
      this.loginFailed();
    } else {
      this.loginSuccess(result);
    }

    return result;
  }

  private loginSuccess(result: LoginManager.LoginResponse) {
    localStorage.token = result.token;
    this.isLoggedIn_ = true;
  }

  private loginFailed() {
    delete localStorage.token;
    this.isLoggedIn_ = false;
  }
}

const user = new User();
export default user;
