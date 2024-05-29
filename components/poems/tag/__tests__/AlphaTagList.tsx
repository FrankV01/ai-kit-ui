import { render, screen } from "@testing-library/react";
import { AlphaTagList, AlphaTagListProps } from "../AlphaTagList";

describe("AlphaTagList", () => {
  const baseProps: AlphaTagListProps = {
    tagData: [{ id: 1, tag: "test-tag" }],
    visible: true,
    containerClassName: "test-container-class",
    linkClassName: "test-link-class",
  };
  const id = baseProps.tagData[0].id;
  it("renders TagLink components when visible", () => {
    render(<AlphaTagList {...baseProps} />);
    const tagLink = screen.getByTestId(`taglink-link-${id}`);
    expect(tagLink).toBeInTheDocument();
  });

  it("does not render TagLink components when not visible", () => {
    const props: AlphaTagListProps = { ...baseProps, visible: false };
    render(<AlphaTagList {...props} />);
    const tagLink = screen.queryByTestId(`AlphaTagList-tag-link-${id}`);
    expect(tagLink).not.toBeInTheDocument();
  });

  it("renders correct number of TagLink components", () => {
    const props: AlphaTagListProps = {
      ...baseProps,
      tagData: [
        { id: 1, tag: "test-tag-1" },
        { id: 2, tag: "test-tag-2" },
        { id: 3, tag: "test-tag-3" },
      ],
    };
    render(<AlphaTagList {...props} />);
    const tagLinks = screen.getAllByTestId(`taglink-link-`, { exact: false });
    expect(tagLinks).toHaveLength(props.tagData.length);
  });
});
