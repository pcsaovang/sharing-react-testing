import { render } from "@testing-library/react";
import Message from "../../../src/components/Message";

describe("Message component", () => {
  it("Render Message component with default props", () => {
    const { container } = render(<Message content="This is a message" />);
    expect(container).toMatchSnapshot();
  });

  it("Render Message component with type is warning", () => {
    const { container } = render(
      <Message content="This is a message" type="warning" />
    );
    expect(container).toMatchSnapshot();
  });

  it("Render Message component with type is error", () => {
    const { container } = render(
      <Message content="This is a message" type="error" />
    );
    expect(container).toMatchSnapshot();
  });
});
