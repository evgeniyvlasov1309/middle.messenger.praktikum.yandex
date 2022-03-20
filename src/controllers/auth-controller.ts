import router from "..";
import authApi from "../api/auth/auth-api";
import { LoginRequest, RegistrationRequest } from "../api/auth/auth-api.types";
import store from "../classes/store";

class AuthController {
  async registration(data: RegistrationRequest) {
    try {
      await authApi.registration(data);

      await this.checkAuth();

      router.go("/messenger");
    } catch (error) {
      alert(error);
    }
  }

  async login(data: LoginRequest) {
    try {
      await authApi.login(data);

      await this.checkAuth();

      router.go("/messenger");
    } catch (error) {
      alert(error);
    }
  }

  async logout() {
    try {
      await authApi.logout();

      await store.set("user", {});

      router.go("/");
    } catch (error) {
      alert(error);
    }
  }

  async redirectToMessenger() {
    try {
      const data = await authApi.getUser();

      store.set("user", data);

      router.go("/messenger");
    } catch (error) {}
  }

  async checkAuth() {
    try {
      const data = await authApi.getUser();

      store.set("user", data);
    } catch (error) {
      router.go("/");
    }
  }
}

const authController = new AuthController();

export default authController;
