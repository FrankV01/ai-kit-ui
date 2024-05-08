import { act, render, screen, waitFor } from "@testing-library/react";
import { PoemsLayoutComponent } from "../../poems/PoemsLayoutComponent";

jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={"session-provider"}>{children}</div>
  ),
}));

jest.mock("../../HeaderMenu", () => {
  return function DummyHeaderMenu() {
    return <div data-testid="mockHeaderMenu"></div>;
  };
});

jest.mock("../../poems/PoemsLandingBanner", () => {
  return function DummyLandingBanner() {
    return <div data-testid="mockLandingBanner"></div>;
  };
});

jest.mock("../../poems/PoemFooter", () => {
  return function DummyFooter() {
    return <div data-testid="mockFooter"></div>;
  };
});

describe("LayoutComponent", () => {
  it("renders without crashing", () => {
    act(() => {
      render(
        <PoemsLayoutComponent>
          <div>unit tests</div>
        </PoemsLayoutComponent>,
      );
      waitFor(() => {
        const layoutElement = screen.getByRole("main");
        expect(layoutElement).toBeInTheDocument();
      });
    });
  });

  it("renders with the mocked HeaderMenu component", () => {
    render(
      <PoemsLayoutComponent>
        <div>unit tests</div>
      </PoemsLayoutComponent>,
    );
    const headerMenuElement = screen.getByTestId("mockHeaderMenu");
    expect(headerMenuElement).toBeInTheDocument();
  });

  it("renders with the mocked LandingBanner component", () => {
    render(
      <PoemsLayoutComponent>
        <div>unit tests</div>
      </PoemsLayoutComponent>,
    );
    const landingBannerElement = screen.getByTestId("mockLandingBanner");
    expect(landingBannerElement).toBeInTheDocument();
  });

  it("renders with the mocked Footer component", () => {
    render(
      <PoemsLayoutComponent>
        <div>unit tests</div>
      </PoemsLayoutComponent>,
    );
    const footerElement = screen.getByTestId("mockFooter");
    expect(footerElement).toBeInTheDocument();
  });
});
