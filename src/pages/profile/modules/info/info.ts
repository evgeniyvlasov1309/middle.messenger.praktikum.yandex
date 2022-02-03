import Block, { Props } from "~/src/classes/block/block";
import Button from "~/src/components/button/button";
import Link from "~/src/components/link/link";
import template from "./info.tmpl";

export default class Info extends Block {
  fields = [
    { label: "Почта", value: "pochta@yandex.ru" },
    { label: "Логин", value: "ivanivanov" },
    { label: "Имя", value: "Иван" },
    { label: "Фамилия", value: "Иванов" },
    { label: "Имя в чате", value: "Иван" },
    { label: "Телефон", value: "+7 (909) 967 30 30" },
  ];

  links = [
    {
      url: "/profile/edit",
      className: "profile-control__link",
      text: "Изменить данные",
    },
    {
      url: "/profile/password-change",
      className: "profile-control__link",
      text: "Изменить пароль",
    },
    {
      url: "#",
      className: "profile-control__link profile-control__link--exit",
      text: "Выйти",
    },
  ];

  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      changeDataLink: new Link({
        url: "/profile/edit",
        className: "profile-control__link",
        text: "Изменить данные",
      }),
      changePasswordLink: new Link({
        url: "/profile/password-change",
        className: "profile-control__link",
        text: "Изменить пароль",
      }),
      exitLink: new Link({
        url: "#",
        className: "profile-control__link profile-control__link--exit",
        text: "Выйти",
      }),
      button: new Button({ text: "Сохранить", type: "button" }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
