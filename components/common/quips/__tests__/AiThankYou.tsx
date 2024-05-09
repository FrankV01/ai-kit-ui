import { render, screen } from "@testing-library/react";
import { AiThankYou } from "../AiThankYou";

describe("AiThankYou", () => {
  it("renders the thank you message", () => {
    render(<AiThankYou />);
    const thankYouMessage = screen.getByText(
      /We thank the AI overlords for their contribution to this site./i,
    );
    expect(thankYouMessage).toBeInTheDocument();
  });
});
