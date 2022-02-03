import Block from "~/src/classes/block";
import { Props } from "~/src/classes/block/block";
import AuthPage from "../auth";
import Login from "../auth/modules/login";
import Registration from "../auth/modules/registration";
import ChatPage from "../chat";
import ErrorPage from "../error";
import ProfilePage from "../profile";
import Edit from "../profile/modules/edit";
import Info from "../profile/modules/info";
import PasswordChange from "../profile/modules/password-change/password-change";
import "./home.scss";
import template from "./home.tmpl";

export default class HomePage extends Block {
  _homeTemplate: string | null = null;

  constructor(props: Props = {}) {
    super("div", props);

    const { pathname } = document.location;

    let child: Block | null = null;

    switch (pathname) {
      case "/":
        this._homeTemplate = `<template class="home">
          {{ link0 }}
          {{ link1 }}
          {{ link2 }}
          {{ link3 }}
          {{ link4 }}
        </template>`;
        break;
      case "/auth/login":
        child = new AuthPage({
          title: "Вход",
          child: new Login(),
        });
        break;
      case "/auth/registration":
        child = new AuthPage({
          title: "Регистрация",
          child: new Registration(),
        });
        break;
      case "/profile":
        child = new ProfilePage({
          child: new Info(),
        });
        break;
      case "/profile/edit":
        child = new ProfilePage({
          child: new Edit(),
        });
        break;
      case "/profile/password-change":
        child = new ProfilePage({
          child: new PasswordChange(),
        });
        break;
      case "/chat":
        child = new ChatPage();
        break;
      case "/server-error":
        child = new ErrorPage({
          title: "500",
          description: "Ошибка на сервере",
        });
        break;
      default:
        child = new ErrorPage({
          title: "404",
          description: "Страница не найдена",
        });
        break;
    }

    this.setProps({
      child,
    });
  }

  render() {
    return this.compile(this._homeTemplate || template, this.props);
  }
}
