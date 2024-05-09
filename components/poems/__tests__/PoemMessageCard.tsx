import { render, screen } from "@testing-library/react";
import { PoemMessageCard } from "../PoemMessageCard";

import { ConvoReturnType } from "../../../lib/Types";

jest.mock(
  "../../../lib/SafeMarkdownToHtml",
  () => () => "This is a test poem.",
);

jest.mock("../../../lib/api/ApiActions", () => ({
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

describe("MessageCard", () => {
  it("renders with messageIndex 0", () => {
    render(<PoemMessageCard key={"unit-test"} messageIndex={0} />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    const msg = /Welcome to /i;
    expect(screen.getByText(msg)).toBeInTheDocument();
  });

  it("renders with messageIndex 1", () => {
    render(<PoemMessageCard key={"unit-test"} messageIndex={1} />);
    expect(screen.getByText("Glad you are here")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Thanks for visiting. Revisions are consistently coming and although changes sometimes slow down, be assured that things are progressing. This isn't a commercial endeavor and the content may reflect that; please bear this in mind as you use & read the site.",
      ),
    ).toBeInTheDocument();
  });

  it("throws an error with invalid messageIndex", () => {
    const consoleSpy = jest.spyOn(console, "error");
    consoleSpy.mockImplementation(() => {});

    // @ts-ignore
    expect(() => render(<PoemMessageCard messageIndex={2} />)).toThrow();

    // Check the first call
    expect(consoleSpy.mock.calls[0][0].detail.message).toEqual(
      "Invalid message index",
    );

    consoleSpy.mockRestore();
  });
});
