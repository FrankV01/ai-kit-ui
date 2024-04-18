import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders with correct AI contribution text", () => {
    render(<Footer />);
    const aiContributionText = screen.getByText(
      /We thank the AI overlords for their contribution to this site./i,
    );
    expect(aiContributionText).toBeInTheDocument();
  });

  it("renders with correct author link", () => {
    render(<Footer />);
    //const authorLink = screen.getByRole("link", { name: /Frank Villasenor/i });
    const authorLink = screen.getAllByRole("link", {
      name: /Frank Villasenor/i,
    });
    for (let elm of authorLink) {
      expect(elm).toBeInTheDocument();
    }
  });

  it("renders with correct social media icons", () => {
    render(<Footer />);
    //const linkedInIcon = screen.getByRole("img", { name: /LinkedIn/i });
    const linkedInIcon = screen.getByTitle("LinkedIn");
    const gitHubIcon = screen.getByTitle(/GitHub/i);

    const theOpenSourceUorgIcon = screen.getByTitle(/The Open Source U/i);
    expect(linkedInIcon).toBeInTheDocument();
    expect(gitHubIcon).toBeInTheDocument();
    expect(theOpenSourceUorgIcon).toBeInTheDocument();
  });

  it("renders with correct dedication text", () => {
    render(<Footer />);
    const dedicationText = screen.getByText(
      /Dedicated with to my Wife, Alina/i,
    );
    expect(dedicationText).toBeInTheDocument();
  });

  it("renders with correct copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/2023-2024 © Frank Villasenor/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders with correct license component", () => {
    render(<Footer />);
    const licenseComponent = screen.getByText(/is licensed under/i);
    expect(licenseComponent).toBeInTheDocument();
  });
});
