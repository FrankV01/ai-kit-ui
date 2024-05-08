import { render, screen } from "@testing-library/react";
import { PoemPromptInfo } from "../../poems/PoemPromptInfo";

// See the Good to know: https://nextjs.org/docs/app/building-your-application/testing/jest
//  TLDR: Not supported yet by Jest or Next.js
describe.skip("PoemPromptInfo", () => {
  it("renders Important details for best results title", async () => {
    render(<PoemPromptInfo />);
    expect(
      await screen.findByText("Important details for best results"),
    ).toBeInTheDocument();
  });

  it("renders prompt suggestions", async () => {
    render(<PoemPromptInfo />);
    expect(
      await screen.findByText(
        "The prompt should be in plain, written english.",
      ),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Provide a detailed, clear prompt. "),
    ).toBeInTheDocument();
  });

  it("renders data loss warning", async () => {
    render(<PoemPromptInfo />);
    expect(
      await screen.findByText("This page does not save your writing"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("As a suggestion, use Google Docs"),
    ).toBeInTheDocument();
  });

  it("renders copy and paste instructions", async () => {
    render(<PoemPromptInfo />);
    expect(
      await screen.findByText("Using Copy and Paste on Windows"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Using Copy and Paste on Mac"),
    ).toBeInTheDocument();
  });
});
