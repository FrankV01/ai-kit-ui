import { render, waitFor } from "@testing-library/react";
import { InfinitePoems } from "../../poems/InfinitePoems";
import { ConvoReturnType, getGroupedPoemIds } from "../../../lib/ApiActions";

jest.mock(
  "../../../lib/SafeMarkdownToHtml",
  () => () => "This is a test poem.",
);

jest.mock("../../../lib/ApiActions", () => ({
  startSession: jest.fn().mockResolvedValue("new-session-id"),
  submitMessageToConvo: jest.fn().mockResolvedValue([]),
  getConvo: jest.fn().mockResolvedValue([] as ConvoReturnType[]),
  requestPoem: jest.fn().mockResolvedValue({ id: 1 }),
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
}));

describe.skip("InfinitePoems", () => {
  beforeEach(() => {
    (getGroupedPoemIds as jest.Mock).mockResolvedValue([[1, 2]]);
  });

  it("renders loading state initially", () => {
    const { getByText } = render(<InfinitePoems />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state when poem retrieval fails", async () => {
    (getGroupedPoemIds as jest.Mock).mockRejectedValue(new Error());
    const { findByText } = render(<InfinitePoems />);
    expect(
      await findByText("error occurred during retrieval of poem data"),
    ).toBeInTheDocument();
  });

  it("renders poems when poem retrieval is successful", async () => {
    const { findByText } = render(<InfinitePoems />);
    expect(await findByText("All poems Displayed")).toBeInTheDocument();
  });

  it("fetches next page of poems when scrolled to bottom", async () => {
    const { findByText } = render(<InfinitePoems />);
    await findByText("All poems Displayed");
    expect(getGroupedPoemIds).toHaveBeenCalledTimes(2);
  });
});
