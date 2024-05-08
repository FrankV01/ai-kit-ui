import { act, render, waitFor, screen } from "@testing-library/react";
import { InfinitePoems } from "../../poems/InfinitePoems";
import { getGroupedPoemIds } from "../../../lib/ApiActions";
import { ConvoReturnType } from "../../../lib/Types";

jest.mock(
  "../../../lib/SafeMarkdownToHtml",
  () => () => "This is a test poem.",
);

jest.mock("../../../lib/ApiActions", () => ({
  startSession: jest.fn().mockResolvedValue("new-session-id"),
  submitMessageToConvo: jest.fn().mockResolvedValue([]),
  getConvo: jest.fn().mockResolvedValue([] as ConvoReturnType[]),
  requestPoem: jest.fn().mockResolvedValue({ id: 1 }),
  getGroupedPoemIds: jest.fn().mockResolvedValue([[1, 2]]),
}));
jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={"session-provider"}>{children}</div>
  ),
  useSession: jest
    .fn()
    .mockReturnValue({ data: { user: { name: "Test User" } } }),
}));
jest.mock("usehooks-ts", () => ({
  useLocalStorage: jest
    .fn()
    .mockReturnValue(["existing-session-id", jest.fn()]),
  useEffectOnce: jest.fn(),
  useInterval: jest.fn(),
}));

describe("InfinitePoems", () => {
  it("renders loading state initially", () => {
    const { getByText, getByRole } = render(<InfinitePoems />);
    expect(getByRole("PoemRowGenerator")).toBeInTheDocument();
  });

  it("renders error state when poem retrieval fails", () => {
    (getGroupedPoemIds as jest.Mock).mockRejectedValue(new Error());
    act(() => {
      render(<InfinitePoems />);
    });
    waitFor(() => {
      expect(
        screen.findByText("error occurred during retrieval of poem data", {
          exact: false,
        }),
      ).toBeInTheDocument();
    });
  });

  it("renders poems when poem retrieval is successful", () => {
    render(<InfinitePoems />);
    waitFor(() => {
      expect(
        screen.findByText("All poems Displayed", {
          exact: false,
        }),
      ).toBeInTheDocument();
    });
  });

  it("fetches next page of poems when scrolled to bottom", () => {
    render(<InfinitePoems />);

    waitFor(() => {
      expect(
        screen.findByText("All poems Displayed", {
          exact: false,
        }),
      ).toBeInTheDocument();
      expect(getGroupedPoemIds).toHaveBeenCalledTimes(2);
    });
  });
});
