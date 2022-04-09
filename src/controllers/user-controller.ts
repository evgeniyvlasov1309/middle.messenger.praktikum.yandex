import router from "..";
import userApi from "../api/user/user-api";
import {
  IUser,
  PasswordRequest,
  UserSearchRequest,
} from "../api/user/user-api.types";
import store from "../classes/store";

class UserController {
  async updateProfile(data: IUser) {
    try {
      await userApi.setProfile(data);

      router.go("/settings");
    } catch (error) {
      alert(error);
    }
  }

  async updateProfileAvatar(data: FormData) {
    try {
      const user = await userApi.setAvatar(data);

      store.set("user", user);
    } catch (error) {
      alert(error);
    }
  }

  async updatePassword(data: PasswordRequest) {
    try {
      await userApi.setPassword(data);

      router.go("/settings");
    } catch (error) {
      alert(error);
    }
  }

  async search(data: UserSearchRequest): Promise<IUser | undefined> {
    try {
      const users = await userApi.search(data);

      const user = users.find((u) => u.login === data.login);

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

const userController = new UserController();

export default userController;
