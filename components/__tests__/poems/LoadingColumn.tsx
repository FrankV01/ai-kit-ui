import { render } from "@testing-library/react";
import { LoadingColumn } from "../../poems/LoadingColumn";

describe("LoadingColumn", () => {
  it("renders three PoemLoading components", () => {
    const { getAllByTestId } = render(<LoadingColumn />);
    const loadingComponents = getAllByTestId("poem-loading");
    expect(loadingComponents.length).toBe(3);
  });

  it("passes unique id to each PoemLoading component", () => {
    const { getAllByTestId } = render(<LoadingColumn />);
    const loadingComponents = getAllByTestId("poem-loading");
    const ids = loadingComponents.map((component) => component.id);
    expect(new Set(ids).size).toBe(3);
  });
});