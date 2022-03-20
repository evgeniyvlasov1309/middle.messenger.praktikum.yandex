import HTTP from "../../classes/httpTransport";
import { BaseAPI } from "../base-api";
import { LoginRequest, RegistrationRequest } from "./auth-api.types";

const authAPIInstance = new HTTP("/auth");

class AuthAPI extends BaseAPI {
  registration(data: RegistrationRequest) {
    return authAPIInstance.post("/signup", {
      data,
    });
  }

  login(data: LoginRequest) {
    return authAPIInstance.post("/signin", {
      data,
    });
  }

  getUser() {
    return authAPIInstance.get("/user");
  }

  logout() {
    return authAPIInstance.post("/logout");
  }
}

const authApi = new AuthAPI();

export default authApi;
