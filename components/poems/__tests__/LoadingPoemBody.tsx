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
    const { getAllByRole, getAllByTestId } = render(<LoadingPoemBody />);
    const placeholders = getAllByRole("status");
    placeholders.forEach((placeholder) => {
      console.log("className", placeholder.className);
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveClass("placeholder", { exact: false });
    });
  });

  it("renders placeholders in a container", () => {
    const { getByRole } = render(<LoadingPoemBody />);
    const container = getByRole("main");
    expect(container).toBeInTheDocument();
  });
});
