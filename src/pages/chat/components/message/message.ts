import Block from "~/src/classes/block";
import "./message.scss";
import template from "./message.tmpl";

interface IMessageProps {
  className?: string;
  content: string;
  time: string;
}

export default class Message extends Block<IMessageProps> {
  constructor(props: IMessageProps = {} as IMessageProps) {
    super("div", props);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
