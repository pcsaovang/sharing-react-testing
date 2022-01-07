import { render } from "@testing-library/react";
import Button from "../../../src/components/Button";

describe("Button component", () => {
  it("Render Button with default props", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });

  it("Render Button with loading prop", () => {
    const { container } = render(<Button loading>Click me</Button>);
    expect(container).toMatchSnapshot();
  });
  
  it("Render Button with disabled prop", () => {
    const { container } = render(<Button disabled>Click me</Button>);
    expect(container).toMatchSnapshot();
  });
});

