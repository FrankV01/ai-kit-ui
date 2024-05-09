import ChatSystemPrompt from "../ChatSystemPrompt";
import {
  Matcher,
  SelectorMatcherOptions,
  act,
  queryByText,
  render,
  waitFor,
} from "@testing-library/react";
import GetSiteConfigs from "../../../lib/api/GetSiteConfigs";
import { ConfigKeys } from "../../../lib/Utilities";

jest.mock("../../../lib/api/GetSiteConfigs", () => jest.fn());

type GetByTextType = (
  id: Matcher,
  options?: SelectorMatcherOptions | undefined,
) => HTMLElement;
type QueryByTextType = (
  id: Matcher,
  options?: SelectorMatcherOptions | undefined,
) => HTMLElement | null;

describe("ChatSystemPrompt", () => {
  it("renders system message when API returns a message", async () => {
    (GetSiteConfigs as jest.Mock).mockResolvedValue({
      [ConfigKeys.newRequestSystemPrompt]: "Test system message",
    });

    let getByText: GetByTextType;
    let queryByText: QueryByTextType;
    await act(async () => {
      const result = render(<ChatSystemPrompt className="test-class" />);
      getByText = result.getByText;
      queryByText = result.queryByText;
    });

    // @ts-ignore - getByText is not null
    expect(getByText("Test system message")).toBeInTheDocument();
    await waitFor(() =>
      // @ts-ignore - queryByText is not null
      expect(queryByText("not there")).not.toBeInTheDocument(),
    );
  });

  it("does not render system message when API returns no message", async () => {
    (GetSiteConfigs as jest.Mock).mockResolvedValue({
      [ConfigKeys.newRequestSystemPrompt]: "",
    });

    const { queryByText } = render(<ChatSystemPrompt className="test-class" />);
    await waitFor(() =>
      expect(queryByText("System Prompt Message:")).not.toBeInTheDocument(),
    );
  });
});
