import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ChatPopover from "../../chat/ChatPopover";

jest.mock("../../chat/ChatComposite.tsx", () => {
  return jest.fn().mockReturnValue(<div>ChatComposite</div>);
});

describe("ChatPopover component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<ChatPopover />);
    expect(getByText("Chat")).toBeInTheDocument();
  });

  it("shows popover on click", () => {
    const { getByText } = render(<ChatPopover />);
    act(() => {
      fireEvent.click(getByText("Chat"));
      expect(getByText("Chat")).toBeInTheDocument();
    });
  });

  it("hides popover on second click", () => {
    const { getByText, queryByText, getByRole, queryByRole, queryAllByRole } =
      render(<ChatPopover />);
    act(() => {
      fireEvent.click(getByText("Chat"));
      fireEvent.click(getByRole("button"));
      expect(queryByRole("heading")).not.toBeInTheDocument();
    });
  });
});
