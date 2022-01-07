import { render } from "@testing-library/react";
import Input from "../../../src/components/Input";

describe("Input component", () => {
  it("Render Input with default props", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
