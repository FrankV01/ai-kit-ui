import { render, screen } from "@testing-library/react";
import MyAnalytics from "../MyAnalytics";

jest.mock("nextjs-google-analytics", () => {
  return {
    GoogleAnalytics: function DummyGoogleAnalytics() {
      return <div data-testid="mockGoogleAnalytics" />;
    },
  };
});

describe("MyAnalytics Component", () => {
  it("renders without crashing", () => {
    render(<MyAnalytics nonce={"n"} gaMeasurementId={"G-XXX"} />);
    const analyticsElement = screen.getByTestId("mockGoogleAnalytics");
    expect(analyticsElement).toBeInTheDocument();
  });
});
