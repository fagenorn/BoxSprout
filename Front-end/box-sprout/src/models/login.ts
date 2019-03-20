import Vue from "vue";
import i18n from "@/i18n";

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
          messages: response.data.errors ||
            (response.data.error ? [response.data.error] : null) || [
              i18n.t("be.boxsprout.model.login.success-login")
            ],
          token: response.data.token
        };
      } catch (error) {
        return {
          failed: true,
          messages: error.response.data.errors || [error.response.data.error],
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
          failed: response.data.errors,
          messages: response.data.errors || [
            i18n.t("be.boxsprout.model.login.success-register")
          ],
          token: response.data.token
        };
      } catch (error) {
        return {
          failed: true,
          messages: error.response.data.errors || [
            i18n.t("be.boxsprout.model.login.failed-register")
          ],
          token: null
        };
      }
    }
  }
}
