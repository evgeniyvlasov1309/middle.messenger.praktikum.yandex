import { expect } from "chai";
import Block from "../../src/classes/block";
import { Router } from "../../src/classes/router";

describe("Тестирование роутера", () => {
  const router = new Router(".app");

  class LoginPage extends Block {}
  class RegistrationPage extends Block {}
  class ChatPage extends Block {}
  class ProfilePage extends Block {}

  router
    .use("/", LoginPage)
    .use("/sign-up", RegistrationPage)
    .use("/messenger", ChatPage)
    .use("/settings", ProfilePage)
    .start();

  it("Переход на новую страницу должен менять состояние свойства history", () => {
    router.go("/sign-up");
    router.go("/messenger");
    router.go("/settings");

    expect(router.history.length).to.eq(4);
  });
});
