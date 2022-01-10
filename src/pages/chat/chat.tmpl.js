import Templator from "/src/utils/templator";

export function template(context) {
  return new Templator(`
    <div>Страница чата</div>
  `).compile(context)
}