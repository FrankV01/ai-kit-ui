import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect, it } from "@jest/globals";
import Author from "../Author";

it("renders and updates a counter", () => {
  const { getByText } = render(<Author />);

  // Assert initial state
  expect(getByText("Counter: 0")).toBeInTheDocument();

  // Click the increment button and assert new state
  fireEvent.click(getByText("Increment"));
  expect(getByText("Counter: 1")).toBeInTheDocument();
});
