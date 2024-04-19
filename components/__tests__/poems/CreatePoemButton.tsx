import { render, fireEvent, waitFor } from "@testing-library/react";
import { CreatePoemButton } from "../../poems/CreatePoemButton";
import { ConvoReturnType, requestPoem } from "../../../lib/ApiActions";

jest.mock("../../../lib/ApiActions", () => ({
  startSession: jest.fn().mockResolvedValue("new-session-id"),
  submitMessageToConvo: jest.fn().mockResolvedValue([]),
  getConvo: jest.fn().mockResolvedValue([] as ConvoReturnType[]),
  requestPoem: jest.fn().mockResolvedValue({ id: 1 }),
}));
jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={"session-provider"}>{children}</div>
  ),
  useSession: jest
    .fn()
    .mockReturnValue({ data: { user: { name: "Test User" } } }),
}));
jest.mock("usehooks-ts", () => ({
  useLocalStorage: jest
    .fn()
    .mockReturnValue(["existing-session-id", jest.fn()]),
}));

describe("CreatePoemButton", () => {
  let mockOnCreatePoem: jest.Mock<any, any, any>;

  beforeEach(() => {
    mockOnCreatePoem = jest.fn();
  });

  it("calls onCreatePoem with poem id when poem creation is successful", async () => {
    const { getByText } = render(
      <CreatePoemButton onCreatePoem={mockOnCreatePoem} />,
    );
    fireEvent.click(getByText("Create Poem"));
    await waitFor(() => expect(mockOnCreatePoem).toHaveBeenCalledWith(1));
  });

  it("displays loading text while creating poem", () => {
    const { getByText } = render(
      <CreatePoemButton onCreatePoem={mockOnCreatePoem} />,
    );
    fireEvent.click(getByText("Create Poem"));
    expect(getByText("Creating...")).toBeInTheDocument();
  });

  it("displays error text when poem creation fails", async () => {
    (requestPoem as jest.Mock).mockRejectedValueOnce(new Error());
    const { getByText } = render(
      <CreatePoemButton onCreatePoem={mockOnCreatePoem} />,
    );
    fireEvent.click(getByText("Create Poem"));
    await waitFor(() =>
      expect(
        getByText("error occurred during poem creation"),
      ).toBeInTheDocument(),
    );
  });
});
