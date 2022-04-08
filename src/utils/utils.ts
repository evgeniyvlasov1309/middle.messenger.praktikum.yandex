import Block from "../classes/block";
import store, { State, StoreEvents } from "../classes/store";
import { Indexed } from "./types";

export function render(query: string, block: Block) {
  const root = document.querySelector(query);

  const content = block.getContent();

  if (content) {
    root?.appendChild(content);

    block.dispatchComponentDidMount();
  }

  return root;
}

export function getClassName(classes: string[]) {
  return classes.join(" ").trim();
}

export function get(obj: unknown, path: string, defaultValue = "") {
  const keys = path.split(".");

  let result: any = obj;

  for (const key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export function childrenArrayToProps(children: Block[]) {
  return children.reduce((prev: any, val: Block) => {
    prev[val._id] = val;
    return prev;
  }, {});
}

export function childrenArrayToTemplate(children: Block[]) {
  return children.map((item) => `{{ ${item._id} }}`).join("");
}

export function checkLength(value: string, min: number, max: number) {
  return value.length >= min && value.length <= max;
}

export function getHtmlFromString(template: string) {
  return new DOMParser()
    .parseFromString(template, "text/html")
    .querySelector("template");
}

export function getQueryString(data: any) {
  const result = [];
  for (const key in data) {
    result.push(`${key}=${data[key].toString()}`);
  }
  return result.join("&");
}

export function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if ((rhs[p] as object).constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof object !== "object") {
    return object;
  }

  if (typeof path !== "string") {
    throw new Error("path must be string");
  }

  const objectFromPath: Indexed = path
    .split(".")
    .reduceRight((prev: Indexed, val, index, arr) => {
      prev = {
        [val]: index === arr.length - 1 ? value : prev,
      };

      return prev;
    }, {});

  return merge(object as Indexed, objectFromPath);
}

export function connect(mapStateToProps: (state: State) => Indexed) {
  // eslint-disable-next-line func-names
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: any = {}) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        store.on(StoreEvents.Updated, () => {
          this.setProps({ ...mapStateToProps(store.getState()) });
        });
      }
    };
  };
}

export function formatDate(date: string) {
  return new Date(date).toLocaleString();
}
