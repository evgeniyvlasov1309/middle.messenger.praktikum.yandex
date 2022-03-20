import { assert } from "chai";
import Templator from "../../src/classes/templator";

describe("Тестирование шаблонизатора", () => {
  it("Шаблон должен корректно компилироваться", () => {
    const templator = new Templator(
      '<div class="{{ className }}">{{ user.name }}<div>'
    );
    assert.equal(
      templator.compile({
        className: "user",
        user: { name: "Evgeniy" },
      }),
      '<div class="user">Evgeniy<div>'
    );
  });
});
