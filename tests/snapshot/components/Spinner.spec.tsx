import { render } from "@testing-library/react";
import Spinner from "../../../src/components/Spinner";

describe("Spinner component", () => {
  it("Render Spinner component", () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
