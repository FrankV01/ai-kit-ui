import { render, screen } from "@testing-library/react";
import ChatParticipants, { ChatParticipant } from "../ChatParticipants";

describe("ChatParticipants", () => {
  const mockParticipants: ChatParticipant[] = [
    { name: "Alice", id: "1", role: "user" },
    { name: "Bob", id: "2", role: "user" },
  ];
  const mockUser: ChatParticipant = { name: "Charlie", id: "3", role: "admin" };

  it("renders user and participants", () => {
    render(
      <ChatParticipants
        chatParticipants={mockParticipants}
        user={mockUser}
        className="test-class"
      />,
    );
    expect(screen.getByText("[👤] Charlie")).toBeInTheDocument();
    expect(screen.getByText("[🤖] Alice")).toBeInTheDocument();
    expect(screen.getByText("[🤖] Bob")).toBeInTheDocument();
  });

  it("renders without participants", () => {
    render(
      <ChatParticipants
        chatParticipants={[]}
        user={mockUser}
        className="test-class"
      />,
    );
    expect(screen.getByText("[👤] Charlie")).toBeInTheDocument();
    expect(screen.queryByText("[🤖]")).toBeNull();
  });

  it("renders without user", () => {
    const emptyUser: ChatParticipant = { name: "", id: "", role: "" };
    render(
      <ChatParticipants
        chatParticipants={mockParticipants}
        user={emptyUser}
        className="test-class"
      />,
    );
    expect(screen.getByText("[🤖] Alice")).toBeInTheDocument();
    expect(screen.getByText("[🤖] Bob")).toBeInTheDocument();
    expect(screen.queryByText("[👤]")).not.toBeInTheDocument();
  });
});
