import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import { useSession } from "next-auth/react";
import ChatParticipantsState from "../ChatParticipantsState";

jest.mock("next-auth/react");

describe("ChatParticipantsState component", () => {
  it("renders ChatParticipants when session user is present", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        session: { user: { name: "Test User", email: "test@test.com" } },
      },
    });

    act(() => {
      render(<ChatParticipantsState className="test-class" />);
    });

    waitFor(() => {
      expect(screen.getByText("Test User")).toBeInTheDocument();
    });
  });

  it("does not render ChatParticipants when session user is not present", () => {
    (useSession as jest.Mock).mockReturnValue({ data: {} });

    const { queryByText } = render(
      <ChatParticipantsState className="test-class" />,
    );
    expect(queryByText("Test User")).not.toBeInTheDocument();
  });
});
