import { BaseAPI } from "../base-api";
import { IUser, PasswordRequest, UserSearchRequest } from "./user-api.types";

class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  setProfile(data: IUser): Promise<IUser> {
    return this._instance.put("/profile", {
      data,
    });
  }

  setPassword(data: PasswordRequest): Promise<void> {
    return this._instance.put("/password", {
      data,
    });
  }

  setAvatar(data: FormData): Promise<IUser> {
    return this._instance.put("/profile/avatar", {
      data,
      headers: {},
    });
  }

  search(data: UserSearchRequest): Promise<IUser[]> {
    return this._instance.post("/search", {
      data,
    });
  }
}

const userApi = new UserAPI();

export default userApi;
