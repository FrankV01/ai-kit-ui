import { render, screen } from "@testing-library/react";
import Notice from "../Notice";

describe("Notice Component", () => {
  it("renders without crashing", () => {
    render(<Notice />);
    const noticeElement = screen.getByRole("alert");
    expect(noticeElement).toBeInTheDocument();
  });

  it("renders with the correct text", () => {
    render(<Notice />);
    const noticeText = screen.getByText(
      /For the time being submitted entries are queued for review. The review is done manually. We appreciate your patience./i,
    );
    expect(noticeText).toBeInTheDocument();
  });

  it("renders with the primary variant", () => {
    render(<Notice />);
    const noticeElement = screen.getByRole("alert");
    expect(noticeElement).toHaveClass("alert-primary");
  });
});
