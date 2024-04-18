import { render, screen } from "@testing-library/react";
import LandingBanner from "../LandingBanner";
import ImageRotate from "../ImageRotate";

jest.mock("../ImageRotate", () => {
  return function DummyImageRotate() {
    return <div data-testid="mockImageRotate"></div>;
  };
});

describe("LandingBanner Component", () => {
  it("renders", () => {
    render(<LandingBanner />);
    const bannerElement = screen.getByRole("heading");
    expect(bannerElement).toBeInTheDocument();
  });

  it("renders with the mocked ImageRotate component", () => {
    render(<LandingBanner />);
    const imageRotateElement = screen.getByTestId("mockImageRotate");
    expect(imageRotateElement).toBeInTheDocument();
  });
});
