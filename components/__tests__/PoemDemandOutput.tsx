import { render, screen, act } from "@testing-library/react";
import PoemDemandOutput from "../PoemDemandOutput";

jest.useFakeTimers();

describe("PoemDemandOutput", () => {
  it("renders empty textarea when no content is provided", () => {
    render(<PoemDemandOutput content="" />);
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  it("renders content in textarea when content is provided", () => {
    render(<PoemDemandOutput content="Test poem" />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByRole("textbox")).toHaveValue("Test poem");
  });

  // Seems ok. Not sure why it doesn't work. Can't find. Problem with "hidden"?
  it("shows spinner while typing", () => {
    render(<PoemDemandOutput content="Test poem" />);
    expect(screen.getByRole("status", { hidden: true })).toBeInTheDocument();
  });

  it("hides spinner after typing", () => {
    render(<PoemDemandOutput content="Test poem" />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
