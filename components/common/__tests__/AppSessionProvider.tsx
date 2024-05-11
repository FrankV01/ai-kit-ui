import { render, screen, within } from "@testing-library/react";
import AppSessionProvider from "../AppSessionProvider";
import { useSession } from "next-auth/react";
import { ReactChildrenType } from "../../../lib/Types";

jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: ReactChildrenType) => (
    <div data-testid={"session-provider"}>{children}</div>
  ),
  useSession: jest
    .fn()
    .mockReturnValue({ data: { user: { name: "Test User" } } }),
}));

describe("AppSessionProvider", () => {
  const _useSession = useSession as jest.Mock;

  it("renders children when session is available", () => {
    _useSession.mockReturnValue([{ user: { name: "Test User" } }, false]);

    render(
      <AppSessionProvider>
        <div>Test Child</div>
      </AppSessionProvider>,
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("renders the source session provider", () => {
    render(
      <AppSessionProvider>
        <div>I should be wrapped in a session provider</div>
      </AppSessionProvider>,
    );

    const sessionProvider = screen.getByTestId("session-provider");
    expect(sessionProvider).toBeInTheDocument();

    const { getByText } = within(sessionProvider);
    expect(
      getByText("I should be wrapped in a session provider"),
    ).toBeInTheDocument();
  });
});
