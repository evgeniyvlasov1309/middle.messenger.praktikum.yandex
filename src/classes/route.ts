import { isEqual, render } from "../utils/utils";
import Block from "./block";

export type Constructable<T = any> = new (...args: any[]) => T;

export interface RouteProps {
  rootQuery: string;
}

export class Route {
  _block: Block | null = null;

  constructor(
    private _pathname: string,
    private _blockClass: Constructable,
    private _props: RouteProps,
    public middleware?: () => void
  ) {}

  get pathname() {
    return this._pathname;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();

      if (this._block) {
        render(this._props.rootQuery, this._block);
      }
      return;
    }

    this._block.show();
  }
}
