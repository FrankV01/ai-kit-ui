import { render, screen } from "@testing-library/react";
import BasicPoemBreadcrub, {
  BasicPoemBreadcrubProps,
} from "../BasicPoemBreadcrub";
import exp from "node:constants";

describe("BasicPoemBreadcrub", () => {
  it("renders with default title when no poemTitle prop is provided", async () => {
    const { findByText, findByTitle } = render(
      <BasicPoemBreadcrub poemTitle={"unit-test"} />,
    );

    const elm = screen.getByText(/unit-test/i);
    expect(elm).toBeInTheDocument();
    // const breadCrumb = await findByTitle("Poem Title");
    // expect(breadCrumb).toBeInTheDocument();
    // expect(breadCrumb).toHaveAttribute("href", "#");
    // expect(breadCrumb).toHaveTextContent(/unit-test/g);
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
    const breadcrumbItem = screen.getByText(`: unit-test`);
    expect(breadcrumbItem).toBeInTheDocument();

    expect(breadcrumbItem).toHaveClass("breadcrumb-item active");
  });
});
