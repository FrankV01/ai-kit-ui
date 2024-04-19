import { render, screen } from "@testing-library/react";
import PoemCardDisplay from "../PoemCardDisplay";
import ISessionlessResponse from "../../types/ISessionlessResponse";

jest.mock("../../lib/SafeMarkdownToHtml", () => {
  return jest.fn().mockImplementation((input: string) => input);
});

describe("PoemCardDisplay", () => {
  const mockEntries = [
    {
      response: "<p>Test response</p>",
      title: "Test title",
      id: "1",
      createdDate: new Date(),
      hidden: false,
      prompt: "Test prompt",
      responseRaw: "Test response",
      internalTrainingRating: 5,
      aiModelGeneration: "GPT-4",
    },
  ];

  it("renders poems when entries are provided", () => {
    render(
      <PoemCardDisplay
        entries={mockEntries as unknown as ISessionlessResponse[]}
      />,
    );
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test response")).toBeInTheDocument();
  });

  it("renders no poems found when no entries are provided", () => {
    render(<PoemCardDisplay entries={[]} />);
    expect(screen.getByText("No poems found")).toBeInTheDocument();
  });

  // Not sure whether to save or not.
  it.skip("groups poems into chunks of three", () => {
    const largeMockEntries = new Array(10).fill(mockEntries[0]);
    render(<PoemCardDisplay entries={largeMockEntries} />);
    const poemRows = screen.getAllByRole("row");
    expect(poemRows).toHaveLength(4);
    expect(poemRows[0].children).toHaveLength(3);
    expect(poemRows[3].children).toHaveLength(1);
  });
});
