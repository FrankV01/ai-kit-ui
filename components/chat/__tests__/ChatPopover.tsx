import React from "react";
import {
  render,
  fireEvent,
  act,
  getByRole,
  getByText,
} from "@testing-library/react";
import ChatPopover from "../ChatPopover";

jest.mock("../ChatComposite.tsx", () => {
  return jest.fn().mockReturnValue(<div>ChatComposite</div>);
});

describe("ChatPopover component", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<ChatPopover />);
    expect(getByRole("dialog")).toBeInTheDocument();
  });

  it("shows popover on click", () => {
    const { getByRole } = render(<ChatPopover />);
    act(() => {
      fireEvent.click(getByRole("button"));
    });
    expect(getByRole("heading")).toBeInTheDocument();
  });

  it("hides popover on second click", () => {
    const { getByRole } = render(<ChatPopover />);

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    const heading = getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Chat");
  });
});
