import { act, render, screen } from "@testing-library/react";
import ChatPlane from "../ChatPlane";

import { ConvoReturnType } from "../../../lib/Types";

jest.mock("../ChatSystemPrompt", () => ({
  __esModule: true,
  default: () => <div>ChatSystemPrompt</div>,
}));

describe("ChatPlane", () => {
  const mockMessages: ConvoReturnType[] = [
    { role: "user", message: "Hello" } as ConvoReturnType,
    { role: "bot", message: "Hi" } as ConvoReturnType,
  ];

  it("renders with user and bot messages", async () => {
    render(<ChatPlane messages={mockMessages} />);
    expect(screen.getByText("Hello 👤")).toBeInTheDocument();
    expect(screen.getByText("🤖 Hi")).toBeInTheDocument();
  });

  it("renders with no messages", () => {
    render(<ChatPlane messages={[]} />);
    expect(screen.getByText("No messages yet.")).toBeInTheDocument();
  });

  it("renders with only user messages", () => {
    const userMessages = [
      { role: "user", message: "Hello" },
    ] as ConvoReturnType[];
    render(<ChatPlane messages={userMessages} />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.queryByText("🤖")).toBeNull();
  });

  it("renders with only bot messages", () => {
    const botMessages = [{ role: "bot", message: "Hi" }] as ConvoReturnType[];
    render(<ChatPlane messages={botMessages} />);
    expect(screen.getByText("🤖 Hi")).toBeInTheDocument();
    expect(screen.queryByText("👤")).toBeNull();
  });
});
