import { render, screen } from "@testing-library/react";
import ImageRotate from "../ImageRotate";

describe("ImageRotate Component", () => {
  it("renders without crashing", () => {
    render(<ImageRotate />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  it("renders with the initial image", () => {
    render(<ImageRotate />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  it("renders with an image from the list", async () => {
    Math.random = jest.fn(() => 0.5); // Mock random to always select the middle image
    render(<ImageRotate />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "/logo_2023-12-08T03-11-37.png",
    );
  });

  it("renders with the fallback image if random selection fails", async () => {
    Math.random = jest.fn(() => 1); // Mock random to select an index out of range
    render(<ImageRotate />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute(
      "src",
      "/logo_2023-12-08T03-20-43.png",
    );
  });
});
