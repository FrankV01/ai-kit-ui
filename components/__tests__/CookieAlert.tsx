import { render, screen } from "@testing-library/react";
import CookieAlert from "../CookieAlert";

describe("CookieAlert", () => {
  it("renders with correct modal title", () => {
    render(<CookieAlert />);
    const modalTitle = screen.getByLabelText("title: Cookie FYI");
    expect(modalTitle).toBeInTheDocument();
  });

  it("renders with correct modal body", () => {
    render(<CookieAlert />);
    const modalBody = screen.getByText(
      /We use cookies. By continuing, you agree to accept them./i,
    );
    expect(modalBody).toBeInTheDocument();
  });

  it("renders with correct button text", () => {
    render(<CookieAlert />);
    const button = screen.getByRole("button", { name: /Fine/i });
    expect(button).toBeInTheDocument();
  });
});
