import { render } from "@testing-library/react";
import { PoemLoadingColumn } from "../PoemLoadingColumn";
import { ReactChildrenType } from "../../../lib/Types";

jest.mock("../../poems/PoemsLayoutComponent", () => ({
  PoemsLayoutComponent: jest.fn(({ children }: ReactChildrenType) => (
    <div data-testid={"poems-layout-component"}>{children}</div>
  )),
}));

describe("PoemLoadingColumn", () => {
  it("renders three PoemLoading components", () => {
    const { getAllByTestId } = render(<PoemLoadingColumn />);
    const loadingComponents = getAllByTestId("poem-loading");
    expect(loadingComponents.length).toBe(3);
  });

  it("passes unique id to each PoemLoading component", () => {
    const { getAllByTestId } = render(<PoemLoadingColumn />);
    const loadingComponents = getAllByTestId("poem-loading");
    const ids = loadingComponents.map((component) => component.id);
    expect(new Set(ids).size).toBe(3);
  });
});
