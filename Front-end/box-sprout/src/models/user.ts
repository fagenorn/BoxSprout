import Vue from "vue";
import { LoginManager } from "./login";

interface UserResponse {
  id: number;
  email: string;
  name: string;
}

class User {
  isLoggedIn: boolean = false;

  userDetails = {} as UserResponse;

  public async initialize() {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        this.isLoggedIn = true;
        let response = await Vue.axios.get("/user");
        this.userDetails = response.data.data;
      } catch (error) {
        this.loginFailed();
      }
    }
  }

  public async login(
    details: LoginManager.LoginDetails
  ): Promise<LoginManager.LoginResponse> {
    let result = await LoginManager.Login.login(details);
    if (result.failed) {
      this.loginFailed();
    } else {
      await this.loginSuccess(result);
    }

    return result;
  }

  public async logout(details: LoginManager.LoginDetails) {
    try {
      await Vue.axios.get("/logout");
      this.loginFailed();
    } catch (error) {
      // ignored
    }
  }

  public async register(
    details: LoginManager.RegistrationDetails
  ): Promise<LoginManager.LoginResponse> {
    let result = await LoginManager.Login.register(details);
    if (result.failed) {
      this.loginFailed();
    } else {
      await this.loginSuccess(result);
    }

    return result;
  }

  private async loginSuccess(result: LoginManager.LoginResponse) {
    localStorage.token = result.token;
    this.isLoggedIn = true;

    try {
      let response = await Vue.axios.get("/user");
      this.userDetails = response.data.data;
    } catch (error) {
      this.loginFailed();
    }
  }

  private loginFailed() {
    delete localStorage.token;
    this.isLoggedIn = false;
  }
}

const user = new User();
export default user;
