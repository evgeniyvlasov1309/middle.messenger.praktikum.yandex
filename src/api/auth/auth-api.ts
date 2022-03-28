import { BaseAPI } from "../base-api";
import { IUser } from "../user/user-api.types";
import { LoginRequest, RegistrationRequest } from "./auth-api.types";

class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  registration(data: RegistrationRequest): Promise<void> {
    return this._instance.post("/signup", {
      data,
    });
  }

  login(data: LoginRequest): Promise<void> {
    return this._instance.post("/signin", {
      data,
    });
  }

  getUser(): Promise<IUser> {
    return this._instance.get("/user");
  }

  logout(): Promise<void> {
    return this._instance.post("/logout");
  }
}

const authApi = new AuthAPI();

export default authApi;
