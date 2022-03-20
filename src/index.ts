import Block from "./classes/block";
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

let isComponentDidMount = false;
let isComponentRender = false;
let isComponentRenderAfterUpdateProps = false;

interface IComponent {
  className?: string;
  text?: string;
}

class Component extends Block<IComponent> {
  constructor(props?: IComponent) {
    super("button", props);
    this.setProps({
      className: props?.className ?? "button",
    });
  }

  componentDidMount() {
    isComponentDidMount = true;
  }

  render() {
    isComponentRender = true;
    if (this.props.className === "updated-button") {
      isComponentRenderAfterUpdateProps = true;
    }
    return this.compile(
      '<template class="{{ className }}">Нажми меня!</template>',
      this.props
    );
  }
}

const component = new Component();

console.log(component);

export default router;
