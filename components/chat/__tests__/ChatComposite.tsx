import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ChatComposite from "../ChatComposite";
import {
  startSession,
  submitMessageToConvo,
} from "../../../lib/api/ApiActions";
import { SessionProvider } from "next-auth/react";
import { ConvoReturnType } from "../../../lib/Types";

jest.mock("../../../lib/api/ApiActions", () => ({
  startSession: jest.fn().mockResolvedValue("new-session-id"),
  submitMessageToConvo: jest.fn().mockResolvedValue([]),
  getConvo: jest.fn().mockResolvedValue([] as ConvoReturnType[]),
}));
jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={"session-provider"}>{children}</div>
  ),
  useSession: jest
    .fn()
    .mockReturnValue({ data: { user: { name: "Test User" } } }),
}));
jest.mock("usehooks-ts", () => ({
  useLocalStorage: jest
    .fn()
    .mockReturnValue(["existing-session-id", jest.fn()]),
}));

describe("ChatComposite", () => {
  it("renders chat plane and chat input", () => {
    render(
      <SessionProvider>
        <ChatComposite />
      </SessionProvider>,
    );
    waitFor(() => {
      expect(screen.getByRole("region")).toBeInTheDocument();
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  it("starts a new session if no session id is present", () => {
    render(
      <SessionProvider>
        <ChatComposite />
      </SessionProvider>,
    );
    waitFor(() => {
      expect(jest.isMockFunction(startSession)).toBeTruthy();
      expect(startSession).toHaveBeenCalled();
    });
  });

  it("fetches conversation if session id is present", () => {
    render(<ChatComposite />);
    act(() => {
      localStorage.setItem("sessionId", "existing-session-id");
    });
    waitFor(() => {
      expect(screen.getByRole("region")).toBeInTheDocument();
    });
  });

  it("submits a message to the conversation", () => {
    render(<ChatComposite />);
    const input = screen.getByRole("textbox");
    act(() => {
      fireEvent.change(input, { target: { value: "Test message" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    });
    waitFor(() => {
      expect(submitMessageToConvo).toHaveBeenCalledWith(
        "existing-session-id",
        "Test message",
      );
    });
  });
});
