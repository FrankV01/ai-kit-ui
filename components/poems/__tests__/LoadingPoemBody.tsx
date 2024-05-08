import { render } from "@testing-library/react";
import LoadingPoemBody from "../../poems/LoadingPoemBody";

describe("LoadingPoemBody", () => {
  it("renders placeholders for poem title, body, and widgets", () => {
    const { getAllByTitle } = render(<LoadingPoemBody />);
    const elements = getAllByTitle("loading widget");
    for (const element of elements) {
      expect(element).toBeInTheDocument();
      expect(element).toBeVisible();
    }
  });

  it("renders placeholders with animation glow", () => {
    const { getAllByRole } = render(<LoadingPoemBody />);
    const placeholders = getAllByRole("status");
    placeholders.forEach((placeholder) => {
      expect(placeholder).toHaveClass(/placeholder/gi);
    });
  });

  it("renders placeholders in a container", () => {
    const { getByRole } = render(<LoadingPoemBody />);
    const container = getByRole("main");
    expect(container).toBeInTheDocument();
  });
});
