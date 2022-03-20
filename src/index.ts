import { Router } from "./classes/router";
import authController from "./controllers/auth-controller";
import "./index.scss";
import ChatPage from "./pages/chat";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import RegistrationPage from "./pages/registration";

const router = new Router("#root");

router
  .use("/", LoginPage, authController.redirectToMessenger)
  .use("/sign-up", RegistrationPage)
  .use("/messenger", ChatPage, authController.checkAuth)
  .use("/settings", ProfilePage, authController.checkAuth)
  .use("/settings/edit", ProfilePage, authController.checkAuth)
  .use("/settings/password-change", ProfilePage, authController.checkAuth)
  .start();

export default router;
