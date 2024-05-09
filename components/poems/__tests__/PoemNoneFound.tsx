import { render } from "@testing-library/react";
import PoemNoneFound from "../PoemNoneFound";

describe("NoneFound", () => {
  it("renders without crashing", () => {
    const { container } = render(<PoemNoneFound />);
    expect(container).toBeInTheDocument();
  });

  it("displays no poems found message", () => {
    const { getByText } = render(<PoemNoneFound />);
    expect(getByText("No poems found")).toBeInTheDocument();
  });
});
