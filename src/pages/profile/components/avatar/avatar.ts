import Block, { Props } from "~/src/classes/block";
import store, { StoreEvents } from "~/src/classes/store";
import Input from "~/src/components/input/input";
import env from "~/src/constants/env";
import userController from "~/src/controllers/user-controller";
import defaultAvatar from "~/src/images/image.svg";
import "./avatar.scss";
import template from "./avatar.tmpl";

export default class Avatar extends Block {
  constructor(props: Props = {}) {
    super("form", props);
    this.setProps({
      input: new Input({
        type: "file",
        name: "avatar",
        className: "input--file",
        events: {
          change: this.onChange.bind(this),
        },
        accept: "image/*",
      }),
    });
  }

  componentDidMount(): void {
    store.on(StoreEvents.Updated, () => {
      const { avatar } = store.getState().user;

      this.setProps({
        src: avatar ? `${env.HOST_RESOURCES}${avatar}` : defaultAvatar,
      });
    });
  }

  onChange(e: any) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    userController.updateProfileAvatar(formData);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
