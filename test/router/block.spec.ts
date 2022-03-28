import { expect } from "chai";
import Block from "../../src/classes/block";

describe("Тестирование компонента блок", () => {
  const element = new Block("div", {
    className: "component",
  });

  let isComponentRerendered = false;

  it("Элемент должен иметь корректные props", () => {
    expect(element.props.className).to.equal("component");
  });

  it("Компонент должен корректно изменять пропсы", () => {
    const renderFunc = element.render;
    element.render = function () {
      isComponentRerendered = true;
      return renderFunc();
    };

    element.setProps({ ...element.props, className: "button" });
    expect(element.props.className).to.equal("button");
  });

  it("Компонент должен перерисовываться после обновления пропсов", () => {
    expect(isComponentRerendered).to.equal(true);
  });
});
