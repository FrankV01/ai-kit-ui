import { render, screen } from "@testing-library/react";
import { IconLinkedIn, IconGitHub, IconTheOpenSourceUorg } from "../Icons";

describe("Icons", () => {
  it("IconLinkedIn renders with correct href", () => {
    render(<IconLinkedIn />);
    const iconLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(iconLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/frankvillasenor/",
    );
  });

  it("IconGitHub renders with correct href", () => {
    render(<IconGitHub />);
    const iconLink = screen.getByRole("link", { name: /GitHub/i });
    expect(iconLink).toHaveAttribute("href", "https://github.com/FrankV01");
  });

  it("IconTheOpenSourceUorg renders with correct href", () => {
    render(<IconTheOpenSourceUorg />);
    const iconLink = screen.getByRole("link", {
      name: /The Open Source U - Frank Villasenor/i,
    });
    expect(iconLink).toHaveAttribute("href", "http://www.theOpenSourceU.org");
  });
});
