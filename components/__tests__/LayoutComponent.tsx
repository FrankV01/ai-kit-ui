import { act, render, screen, waitFor } from "@testing-library/react";
import { LayoutComponent } from "../LayoutComponent";

jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={"session-provider"}>{children}</div>
  ),
}));

jest.mock("../HeaderMenu", () => {
  return function DummyHeaderMenu() {
    return <div data-testid="mockHeaderMenu"></div>;
  };
});

jest.mock("../LandingBanner", () => {
  return function DummyLandingBanner() {
    return <div data-testid="mockLandingBanner"></div>;
  };
});

jest.mock("../Footer", () => {
  return function DummyFooter() {
    return <div data-testid="mockFooter"></div>;
  };
});

describe("LayoutComponent", () => {
  it("renders without crashing", () => {
    act(() => {
      render(
        <LayoutComponent>
          <div>unit tests</div>
        </LayoutComponent>,
      );
      waitFor(() => {
        const layoutElement = screen.getByRole("main");
        expect(layoutElement).toBeInTheDocument();
      });
    });
  });

  it("renders with the mocked HeaderMenu component", () => {
    render(
      <LayoutComponent>
        <div>unit tests</div>
      </LayoutComponent>,
    );
    const headerMenuElement = screen.getByTestId("mockHeaderMenu");
    expect(headerMenuElement).toBeInTheDocument();
  });

  it("renders with the mocked LandingBanner component", () => {
    render(
      <LayoutComponent>
        <div>unit tests</div>
      </LayoutComponent>,
    );
    const landingBannerElement = screen.getByTestId("mockLandingBanner");
    expect(landingBannerElement).toBeInTheDocument();
  });

  it("renders with the mocked Footer component", () => {
    render(
      <LayoutComponent>
        <div>unit tests</div>
      </LayoutComponent>,
    );
    const footerElement = screen.getByTestId("mockFooter");
    expect(footerElement).toBeInTheDocument();
  });
});
