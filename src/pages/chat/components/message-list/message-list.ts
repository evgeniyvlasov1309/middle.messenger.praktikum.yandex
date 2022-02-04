import Block, { Props } from "~/src/classes/block";
import { getClassName } from "~/src/utils/utils";
import Message from "../message";
import "./message-list.scss";
import template from "./message-list.tmpl";

export default class MessageList extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      message1: new Message({
        className: getClassName(["message"]),
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
      }),
      message2: new Message({
        className: getClassName([
          "message",
          "message--outgoing",
          "message--delivered",
        ]),
        text: "Привет!",
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
