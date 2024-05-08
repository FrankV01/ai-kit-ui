import { act, render, screen } from "@testing-library/react";
import PoemRowSet from "../../poems/PoemRowSet";
import { PoemCardType } from "../../poems/PoemCard";

import { ConvoReturnType } from "../../../lib/Types";

jest.mock("next/dynamic", () =>
  jest.fn().mockReturnValue(() => <div>PoemCard</div>),
);
jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={"session-provider"}>{children}</div>
  ),
  useSession: jest
    .fn()
    .mockReturnValue({ data: { user: { name: "Test User" } } }),
}));
jest.mock("../../../lib/api/ApiActions", () => ({
  getGroupedPoemIds: jest.fn().mockResolvedValue([[1, 2, 3]]),
  // startSession: jest.fn().mockResolvedValue("new-session-id"),
  // submitMessageToConvo: jest.fn().mockResolvedValue([]),
  // getConvo: jest.fn().mockResolvedValue([] as ConvoReturnType[]),
  // requestPoem: jest.fn().mockResolvedValue({ id: 1 }),
}));
jest.mock(
  "../../../lib/SafeMarkdownToHtml",
  () => () => "This is a test poem.",
);

describe("PoemColumn", () => {
  it("renders three PoemCards when isPoemCol is true", () => {
    render(<PoemRowSet poemId1={1} poemId2={2} poemId3={3} isPoemCol={true} />);
    const poemCards = screen.getAllByText("PoemCard");
    expect(poemCards).toHaveLength(3);
  });

  it("renders two PoemCards when isPoemCol is true and poemId3 is not provided", () => {
    render(<PoemRowSet poemId1={1} poemId2={2} isPoemCol={true} />);
    const poemCards = screen.getAllByText("PoemCard");
    expect(poemCards).toHaveLength(2);
  });

  it("renders PoemRowGenerator when isPoemCol is false", () => {
    render(<PoemRowSet poemId1={1} isPoemCol={false} />);

    act(() => {
      const poemRowGenerator = screen.getAllByRole("PoemRowGenerator");
      for (const row of poemRowGenerator) {
        expect(row).toBeInTheDocument();
      }
    });
  });
});
