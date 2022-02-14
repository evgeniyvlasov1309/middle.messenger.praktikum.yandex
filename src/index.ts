import Link from "./components/link/link";
import "./index.scss";
import HomePage from "./pages/home/home";
import { render } from "./utils/utils";

const component = new HomePage({
  link0: new Link({
    url: "/auth/login",
    text: "auth",
  }),
  link1: new Link({ url: "/profile", text: "profile" }),
  link2: new Link({ url: "/chat", text: "chat" }),
  link3: new Link({ url: "/server-error", text: "500" }),
  link4: new Link({ url: "/not-found-error", text: "404" }),
});

render("#root", component);
