import HTTP from "../../classes/httpTransport";
import { BaseAPI } from "../base-api";
import { PasswordRequest, User, UserSearchRequest } from "./user-api.types";

const userAPIInstance = new HTTP("/user");

class UserAPI extends BaseAPI {
  profile(data: User) {
    return userAPIInstance.put("/profile", {
      data,
    });
  }

  password(data: PasswordRequest) {
    return userAPIInstance.put("/password", {
      data,
    });
  }

  avatar(data: FormData) {
    return userAPIInstance.put("/profile/avatar", {
      data,
      headers: {},
    });
  }

  search(data: UserSearchRequest): Promise<User[]> {
    return userAPIInstance.post("/search", {
      data,
    });
  }
}

const userApi = new UserAPI();

export default userApi;
