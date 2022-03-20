import router from "..";
import userApi from "../api/user/user-api";
import {
  PasswordRequest,
  User,
  UserSearchRequest,
} from "../api/user/user-api.types";
import store from "../classes/store";

class UserController {
  async updateProfile(data: User) {
    try {
      await userApi.profile(data);

      router.go("/settings");
    } catch (error) {
      alert(error);
    }
  }

  async updateProfileAvatar(data: FormData) {
    try {
      const user = await userApi.avatar(data);

      store.set("user", user);
    } catch (error) {
      alert(error);
    }
  }

  async updatePassword(data: PasswordRequest) {
    try {
      await userApi.password(data);

      router.go("/settings");
    } catch (error) {
      alert(error);
    }
  }

  async search(data: UserSearchRequest) {
    try {
      const users = await userApi.search(data);

      const user = users.find((user) => user.login === data.login);

      return user;
    } catch (error) {}
  }
}

const userController = new UserController();

export default userController;
