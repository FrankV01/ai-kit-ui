import { render, screen } from "@testing-library/react";
import PoemCardDisplay from "../../poems/PoemCardDisplay";

import { ISessionlessResponse } from "../../../lib/Types";

jest.mock("../../../lib/SafeMarkdownToHtml", () => {
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

  it("groups poems into chunks of three", () => {
    const largeMockEntries = new Array(10).fill(mockEntries[0]);
    render(<PoemCardDisplay entries={largeMockEntries} />);
    const cards = screen.getAllByRole("card");
    expect(cards).toHaveLength(10);
    const cardRow = screen.getAllByRole("card-row");
    expect(cardRow).toHaveLength(4);
  });
});
