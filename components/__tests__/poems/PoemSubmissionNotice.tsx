import { render, screen } from "@testing-library/react";
import PoemSubmissionNotice from "../../poems/PoemSubmissionNotice";

describe("Notice Component", () => {
  it("renders without crashing", () => {
    render(<PoemSubmissionNotice />);
    const noticeElement = screen.getByRole("alert");
    expect(noticeElement).toBeInTheDocument();
  });

  it("renders with the correct text", () => {
    render(<PoemSubmissionNotice />);
    const noticeText = screen.getByText(
      /For the time being submitted entries are queued for review. The review is done manually. We appreciate your patience./i,
    );
    expect(noticeText).toBeInTheDocument();
  });

  it("renders with the primary variant", () => {
    render(<PoemSubmissionNotice />);
    const noticeElement = screen.getByRole("alert");
    expect(noticeElement).toHaveClass("alert-primary");
  });
});
