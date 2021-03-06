import { v4 as makeUUID } from "uuid";
import { getHtmlFromString } from "../utils/utils";
import EventBus from "./eventBus";
import { compile } from "./templator";

export type Props = Record<string, any>;

export interface Meta<T> {
  tagName: string;
  props: T;
}

type Children<T> = Record<string, Block<T>>;

export default class Block<T extends Props = Props> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element: Element | null = null;

  _meta: Meta<T>;

  eventBus: () => EventBus;

  _id: string;

  props: T;

  children: Children<T>;

  constructor(tagName = "div", props: T = {} as T) {
    this.children = this._getChildren(props);

    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();

    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      const element = this.props.selector
        ? this._element?.querySelector(this.props.selector)
        : this._element;
      element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      const element = this.props.selector
        ? this._element?.querySelector(this.props.selector)
        : this._element;
      element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: T, newProps: T) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.children = this._getChildren(newProps);
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: T, newProps: T) {
    return true;
  }

  setProps = (nextProps: T) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();

    this._removeEvents();

    if (block && this._element) {
      this._element.innerHTML = "";
      this._element.append(block.content);
      block.getAttributeNames().forEach((name) => {
        this._element?.setAttribute(name, block.getAttribute(name) || "");
      });
    }

    this._addEvents();
  }

  render(): null | HTMLTemplateElement {
    return null;
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: T): T {
    return new Proxy(props, {
      set: (target: any, prop: string, value: unknown) => {
        this._meta.props = { ...this.props };
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, this._meta.props, target);
        return true;
      },
      deleteProperty: () => {
        throw new Error("?????? ??????????????");
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    return element;
  }

  _getChildren(propsAndChildren: T) {
    const children: Children<T> = {};
    const props: any = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return children;
  }

  compile(template: string, props: T) {
    const propsAndStubs: any = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = getHtmlFromString(compile(template, propsAndStubs));

    Object.values(this.children).forEach((child) => {
      const stub = fragment?.content.querySelector(`[data-id="${child._id}"]`);

      stub?.replaceWith(child?.getContent() as Node);
    });

    return fragment;
  }

  show() {
    if (this._element) {
      (this._element as HTMLElement).style.display = "";
    }
  }

  hide() {
    if (this._element) {
      (this._element as HTMLElement).style.display = "none";
    }
  }
}
