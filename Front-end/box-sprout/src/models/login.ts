import Vue from "vue";

export namespace LoginManager {
  export interface LoginDetails {
    email: string;
    password: string;
  }

  export interface RegistrationDetails {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
  }

  export interface LoginResponse {
    failed: boolean;
    messages: string[];
    token: string | null;
  }

  export class Login {
    static async login(details: LoginDetails): Promise<LoginResponse> {
      try {
        let response = await Vue.axios.post("/login", details);
        return {
          failed: response.data.error,
          messages:
            response.data.error || response.data.errors || "Login success!",
          token: response.data.token
        };
      } catch (error) {
        return {
          failed: true,
          messages:
            error.response.data.error ||
            error.response.data.errors ||
            "Failed to log in. (Critical)",
          token: null
        };
      }
    }

    static async register(
      details: RegistrationDetails
    ): Promise<LoginResponse> {
      try {
        let response = await Vue.axios.post("/register", details);
        return {
          failed: response.data.error,
          messages:
            response.data.error ||
            response.data.errors ||
            "Registration success!",
          token: response.data.token
        };
      } catch (error) {
        return {
          failed: true,
          messages:
            error.response.data.error ||
            error.response.data.errors ||
            "Failed to register. (Critical)",
          token: null
        };
      }
    }
  }
}
