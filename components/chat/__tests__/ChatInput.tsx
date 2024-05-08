import { render, fireEvent } from "@testing-library/react";
import ChatInput from "../ChatInput";

type BasicEventHandler = () => void;

describe("ChatInput", () => {
  let mockSubmit: BasicEventHandler, mockNewSession: BasicEventHandler;

  beforeEach(() => {
    mockSubmit = jest.fn();
    mockNewSession = jest.fn();
  });

  it("does not calls onSubmit when form is in default state", () => {
    const { getByRole } = render(
      <ChatInput
        onSubmit={mockSubmit}
        onNewSession={mockNewSession}
        className=""
      />,
    );
    const input: HTMLInputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.submit(getByRole("button", { name: "Submit" }));
    expect(mockSubmit).toHaveBeenCalled();
  });

  it("calls onSubmit when form is submitted with text", () => {
    const { getByRole } = render(
      <ChatInput
        onSubmit={mockSubmit}
        onNewSession={mockNewSession}
        className=""
      />,
    );
    const input: HTMLInputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.submit(getByRole("button", { name: "Submit" }));
    expect(mockSubmit).toHaveBeenCalled();
  });

  it("calls onNewSession when new session button is clicked", () => {
    const { getByText } = render(
      <ChatInput
        onSubmit={mockSubmit}
        onNewSession={mockNewSession}
        className=""
      />,
    );
    fireEvent.click(getByText("New Session"));
    expect(mockNewSession).toHaveBeenCalled();
  });

  it("clears input after form submission", () => {
    const { getByRole } = render(
      <ChatInput
        onSubmit={mockSubmit}
        onNewSession={mockNewSession}
        className=""
      />,
    );
    const input: HTMLInputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.submit(getByRole("button", { name: "Submit" }));
    expect(input.value).toBe("");
  });

  it("does not call onSubmit when form is submitted with empty input", () => {
    const { getByRole } = render(
      <ChatInput
        onSubmit={mockSubmit}
        onNewSession={mockNewSession}
        className=""
      />,
    );
    const input: HTMLInputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(getByRole("button", { name: "Submit" }));
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
