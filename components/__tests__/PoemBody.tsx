import { render, screen } from "@testing-library/react";
import PoemBody from "../PoemBody";
import ISessionlessResponse from "../../types/ISessionlessResponse";

jest.mock(
  "../BasicPoemBreadcrub",
  () =>
    function PoemBreadcrumb() {
      return <div data-testid="mockBasicPoemBreadcrub"></div>;
    },
);
jest.mock(
  "../poems/PoemRatingWidget",
  () =>
    function PoemRatingWidget() {
      return <div data-testid="mockPoemRatingWidget"></div>;
    },
);
jest.mock("../../lib/SafeMarkdownToHtml", () => () => "This is a test poem.");

describe("PoemBody Component", () => {
  const mockPoemData = {
    title: "Test Poem",
    response: "This is a test poem.",
    responseRaw: "This is a test poem.",
    id: "123",
    createdDate: "2022-01-01T00:00:00Z",
    aiModelGeneration: "1.0",
    prompt: "Test prompt",
    hidden: false,
    internalTrainingRating: 0,
  } as unknown as ISessionlessResponse;

  it("renders poem title correctly", () => {
    render(<PoemBody poemData={mockPoemData} />);
    const titleElement = screen.getByText(mockPoemData.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders poem content correctly", () => {
    render(<PoemBody poemData={mockPoemData} />);
    const contentElement = screen.getByText(mockPoemData.response);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders prompt correctly when provided", () => {
    render(<PoemBody poemData={mockPoemData} />);
    const promptElement = screen.getByText(mockPoemData.prompt);
    expect(promptElement).toBeInTheDocument();
  });

  it("renders fallback text when prompt is not provided", () => {
    const { prompt, ...rest } = mockPoemData;
    render(<PoemBody poemData={rest as ISessionlessResponse} />);
    const fallbackPromptElement = screen.getByText(
      "Sorry, the prompt wasn't captured.",
    );
    expect(fallbackPromptElement).toBeInTheDocument();
  });

  it("renders BasicPoemBreadcrub component", () => {
    render(<PoemBody poemData={mockPoemData} />);
    const breadcrumbElement = screen.getByTestId("mockBasicPoemBreadcrub");
    expect(breadcrumbElement).toBeInTheDocument();
  });

  it("renders PoemRatingWidget component", () => {
    render(<PoemBody poemData={mockPoemData} />);
    const ratingWidgetElement = screen.getByTestId("mockPoemRatingWidget");
    expect(ratingWidgetElement).toBeInTheDocument();
  });
});
