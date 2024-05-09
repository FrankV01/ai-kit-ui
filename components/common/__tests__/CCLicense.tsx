import { render, screen } from "@testing-library/react";
import CCLicense from "../CCLicense";

describe("CCLicense", () => {
  it("renders with correct license text", () => {
    render(<CCLicense />);
    const licenseText = screen.getByText(/is licensed under/i);
    expect(licenseText).toBeInTheDocument();
  });

  it("renders with correct attribution URL", () => {
    render(<CCLicense />);
    const attributionLink = screen.getByRole("link", {
      name: /AI Generated Content/i,
    });
    expect(attributionLink).toHaveAttribute(
      "href",
      "http://poems.theOpenSourceU.org",
    );
  });

  it("renders with correct license URL", () => {
    render(<CCLicense />);
    const licenseLink = screen.getByRole("link", { name: /CC BY-NC 4.0/i });
    expect(licenseLink).toHaveAttribute(
      "href",
      "http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1",
    );
  });

  it("renders with correct license images", () => {
    render(<CCLicense />);
    const elements = screen.getAllByAltText("creativecommons.org/presskit");
    const ccImage = elements[0];
    const byImage = elements[1];
    const ncImage = elements[2];
    expect(ccImage).toBeInTheDocument();
    expect(byImage).toBeInTheDocument();
    expect(ncImage).toBeInTheDocument();
  });
});
