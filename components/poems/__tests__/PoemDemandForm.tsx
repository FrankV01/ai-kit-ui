import { render, fireEvent, waitFor } from "@testing-library/react";
import { PoemDemandForm } from "../../poems/PoemDemandForm";
import { demandPoem } from "../../../lib/ApiActions";

jest.mock("../../../lib/ApiActions", () => ({
  demandPoem: jest.fn(),
}));

describe("PoemDemandForm", () => {
  it("renders Demand Poem button", () => {
    const { getByText } = render(<PoemDemandForm />);
    expect(getByText("Demand Poem from Poembot")).toBeInTheDocument();
  });

  it("does not render PoemDemandOutput when poem length is 0", () => {
    const { queryByTestId } = render(<PoemDemandForm />);
    expect(queryByTestId("poem-output")).toBeNull();
  });

  it("renders PoemDemandOutput when poem length is not 0", async () => {
    (demandPoem as jest.Mock).mockResolvedValue("Test poem");
    const { getByText, findByTestId } = render(<PoemDemandForm />);
    fireEvent.click(getByText("Demand Poem from Poembot"));
    await waitFor(() => expect(findByTestId("poem-output")).toBeTruthy());
  });
});
