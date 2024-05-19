import { render, screen } from "@testing-library/react";
import BasicPoemBreadcrub, {
  BasicPoemBreadcrubProps,
} from "../../poems/BasicPoemBreadcrub";

describe("BasicPoemBreadcrub", () => {
  it("renders with default title when no poemTitle prop is provided", async () => {
    const { findByText, findByTitle } = render(
      <BasicPoemBreadcrub poemTitle={"unit-test"} />,
    );

    const elm = screen.getByText(/unit-test/i);
    expect(elm).toBeInTheDocument();
  });

  it("renders with provided poemTitle prop", () => {
    const props: BasicPoemBreadcrubProps = {
      poemTitle: "Test Poem",
    };
    render(<BasicPoemBreadcrub {...props} />);

    const breadcrumbItem = screen.getByText(`: Test Poem`);
    expect(breadcrumbItem).toBeInTheDocument();
  });

  it("renders with home link", () => {
    render(<BasicPoemBreadcrub poemTitle={"unit-test"} />);
    const homeLink = screen.getByRole("link", { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders with active breadcrumb item", () => {
    render(<BasicPoemBreadcrub poemTitle={"unit-test"} />);

    const breadcrumbItem = screen.getByRole("breadcrumb-item");
    expect(breadcrumbItem).toBeInTheDocument();
    const breadcrumbItem2 = screen.getByRole("link", { name: /unit-test/i });
    expect(breadcrumbItem2.parentElement).toHaveClass("breadcrumb-item active");
  });
});
