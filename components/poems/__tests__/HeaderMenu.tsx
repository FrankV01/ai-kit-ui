import { render, screen } from "@testing-library/react";
import HeaderMenu from "../HeaderMenu";

//Was easier than mocking useSession. Will still need to sort
// mocking it though.
jest.mock("../../stateful/LoginButton", () => {
  return function MockLoginButton() {
    return <button>Login</button>;
  };
});

describe("HeaderMenu", () => {
  it("renders with correct topic in brand", () => {
    render(<HeaderMenu topic="poetry" />);
    const brandText = screen.getByRole("heading", { name: /poetry Poems/i });
    expect(brandText).toBeInTheDocument();
  });

  it("renders with correct home link", () => {
    render(<HeaderMenu topic="poetry" />);
    //const homeLink = screen.getByRole("link", { name: /Poems/i });
    const homeLink = screen.getByTestId("topic-h3-brand-link");
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders with correct tag list link", () => {
    render(<HeaderMenu topic="poetry" />);
    const tagListLink = screen.getByRole("link", { name: /Tag List/i });
    expect(tagListLink).toHaveAttribute("href", "/tag-list");
  });

  it("renders with correct LinkedIn icon", () => {
    render(<HeaderMenu topic="poetry" />);
    const linkedInIcon = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedInIcon).toBeInTheDocument();
  });

  it("renders with correct GitHub icon", () => {
    render(<HeaderMenu topic="poetry" />);
    const gitHubIcon = screen.getByRole("link", { name: /GitHub/i });
    expect(gitHubIcon).toBeInTheDocument();
  });

  it("renders with correct TheOpenSourceUorg icon", () => {
    render(<HeaderMenu topic="poetry" />);
    const theOpenSourceUorgIcon = screen.getByRole("link", {
      name: /The Open Source U/i,
    });
    expect(theOpenSourceUorgIcon).toBeInTheDocument();
  });

  it("renders with LoginButton component", () => {
    render(<HeaderMenu topic="poetry" />);
    const loginButton = screen.getByRole("button", { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });
});
