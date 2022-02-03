import Block from "../classes/block/block";

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
