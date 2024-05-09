import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import Author from "../Author";

describe("Author", () => {
  it("renders and updates a counter ", () => {
    const { getByText } = render(<Author includeEmailLink={false} />);

    // Assert initial state
    expect(getByText("Frank Villasenor")).toBeInTheDocument();
  });

  it("renders with a className", () => {
    const { getByText } = render(
      <Author includeEmailLink={true} className={"unit-test-01"} />,
    );

    // Assert initial state
    const elm = getByText("Frank Villasenor");
    expect(elm).toBeInTheDocument();
    expect(elm.className).toBe("unit-test-01");
  });
});
