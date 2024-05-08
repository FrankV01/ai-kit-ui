import { render, screen } from "@testing-library/react";
import { PoemDemandInfo } from "../../poems/PoemDemandInfo";

describe("PoemDemandInfo", () => {
  it("renders Demand-a-Poem title", () => {
    render(<PoemDemandInfo />);
    expect(screen.getByText("Demand-a-Poem")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<PoemDemandInfo />);
    expect(
      screen.getByText(
        "Let the Poembot AI write it's own poem while you watch.",
      ),
    ).toBeInTheDocument();
  });
});
