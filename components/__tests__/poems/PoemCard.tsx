import { render, screen, waitFor } from "@testing-library/react";
import PoemCard, { PoemCardType } from "../../poems/PoemCard";
import { getPoemById } from "../../../lib/ApiActions";
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
  getPoemById: jest.fn().mockResolvedValue({
    id: 1,
    title: "Test Poem",
    response: "This is a test poem",
    internalTrainingRating: 5,
  }),
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
  useInterval: jest.fn(),
}));

describe("PoemCard", () => {
  beforeEach(() => {
    (getPoemById as jest.Mock).mockResolvedValue({
      id: 1,
      title: "Test Poem",
      response: "This is a test poem",
      internalTrainingRating: 5,
    });
  });

  it("renders loading state initially", () => {
    render(<PoemCard id={1} />);
    expect(screen.getByTestId("loading-notif")).toBeInTheDocument();
  });

  it("renders poem data when loaded", async () => {
    render(<PoemCard id={1} />);
    waitFor(() => {
      expect(screen.findByText("Test Poem")).toBeInTheDocument();
      expect(screen.getByText("This is a test poem")).toBeInTheDocument();
    });
  });

  // Not a thing right now
  it.skip("renders error state when poem retrieval fails", async () => {
    (getPoemById as jest.Mock).mockRejectedValue(new Error());
    render(<PoemCard id={1} />);
    expect(
      await screen.findByText(
        "An error occurred during retrieval of poem data",
      ),
    ).toBeInTheDocument();
  });

  it("renders placeholder card when cardType is PlaceholderCard", () => {
    render(
      <PoemCard
        cardType={PoemCardType.PlaceholderCard}
        placeholder={{ title: "Placeholder Title", body: "Placeholder Body" }}
      />,
    );
    expect(screen.getByText("Placeholder Title")).toBeInTheDocument();
    expect(screen.getByText("Placeholder Body")).toBeInTheDocument();
  });

  it("renders new poem button card when cardType is NewPoemButtonCard", () => {
    const mockOnCreatePoem = jest.fn();
    render(
      <PoemCard
        cardType={PoemCardType.NewPoemButtonCard}
        newPoem={{ onCreatePoem: mockOnCreatePoem }}
      />,
    );
    expect(screen.getByText("Generate a new Poem")).toBeInTheDocument();
  });
});
