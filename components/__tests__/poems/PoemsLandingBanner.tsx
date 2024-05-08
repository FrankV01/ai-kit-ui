import { render, screen } from "@testing-library/react";
import PoemsLandingBanner from "../../poems/PoemsLandingBanner";

jest.mock("../../poems/PoemsImageRotate", () => {
  return function DummyImageRotate() {
    return <div data-testid="mockImageRotate"></div>;
  };
});

describe("LandingBanner Component", () => {
  it("renders", () => {
    render(<PoemsLandingBanner />);
    const bannerElement = screen.getByRole("heading");
    expect(bannerElement).toBeInTheDocument();
  });

  it("renders with the mocked ImageRotate component", () => {
    render(<PoemsLandingBanner />);
    const imageRotateElement = screen.getByTestId("mockImageRotate");
    expect(imageRotateElement).toBeInTheDocument();
  });
});
