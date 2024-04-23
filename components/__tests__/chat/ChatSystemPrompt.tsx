import { getSiteConfigs } from "../../../lib/ApiActions";
import ChatSystemPrompt from "../../chat/ChatSystemPrompt";
import {
  act,
  getByText,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";

jest.mock("../../../lib/ApiActions", () => ({
  getSiteConfigs: jest.fn(),
}));

describe("ChatSystemPrompt", () => {
  it("renders system message when API returns a message", async () => {
    (getSiteConfigs as jest.Mock).mockResolvedValue([
      { key: "newRequestSystemPrompt", value: "Test system message" },
    ]);

    act(() => {
      const { getByText } = render(<ChatSystemPrompt className="test-class" />);
      waitFor(() => getByText("Test system message"));
    });
  });

  it("does not render system message when API returns no message", async () => {
    (getSiteConfigs as jest.Mock).mockResolvedValue([
      { key: "newRequestSystemPrompt", value: "" },
    ]);

    const { queryByText } = render(<ChatSystemPrompt className="test-class" />);
    await waitFor(() =>
      expect(queryByText("System Prompt Message:")).not.toBeInTheDocument(),
    );
  });
});
