import ChatSystemPrompt from "../ChatSystemPrompt";
import { act, render, waitFor } from "@testing-library/react";
import GetSiteConfigs from "../../../lib/api/GetSiteConfigs";

jest.mock("../../../lib/api/GetSiteConfigs", () => jest.fn());

describe("ChatSystemPrompt", () => {
  it("renders system message when API returns a message", async () => {
    (GetSiteConfigs as jest.Mock).mockResolvedValue([
      { key: "newRequestSystemPrompt", value: "Test system message" },
    ]);

    act(() => {
      const { getByText } = render(<ChatSystemPrompt className="test-class" />);
      waitFor(() => getByText("Test system message"));
    });
  });

  it("does not render system message when API returns no message", async () => {
    (GetSiteConfigs as jest.Mock).mockResolvedValue([
      { key: "newRequestSystemPrompt", value: "" },
    ]);

    const { queryByText } = render(<ChatSystemPrompt className="test-class" />);
    await waitFor(() =>
      expect(queryByText("System Prompt Message:")).not.toBeInTheDocument(),
    );
  });
});
