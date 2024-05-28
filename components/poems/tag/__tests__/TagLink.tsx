import { render, screen } from "@testing-library/react";
import { TagLink, TagLinkProps } from "../TagLink";

describe("TagLink", () => {
  const baseProps: TagLinkProps = {
    className: "test-class",
    linkClassName: "test-link-class",
    tagItem: { id: 1, tag: "test-tag" },
  };

  it("renders with correct class names", () => {
    render(<TagLink {...baseProps} />);
    const tagDiv = screen.getByTestId(`tag-link-div-${baseProps.tagItem.id}`);
    expect(tagDiv).toHaveClass(baseProps.className);
    const tagLink = screen.getByTestId(`tag-link-link-${baseProps.tagItem.id}`);
    expect(tagLink).toHaveClass(baseProps.linkClassName);
  });

  it("renders with correct link and text", () => {
    render(<TagLink {...baseProps} />);
    const tagLink = screen.getByTestId(`tag-link-link-${baseProps.tagItem.id}`);
    expect(tagLink).toHaveAttribute(
      "href",
      `/poem/tag/${encodeURIComponent(baseProps.tagItem.tag)}`,
    );
    expect(tagLink).toHaveTextContent(baseProps.tagItem.tag);
  });

  it("renders correctly when tag is empty", () => {
    const props: TagLinkProps = {
      ...baseProps,
      tagItem: { ...baseProps.tagItem, tag: "" },
    };
    expect(() => {
      render(<TagLink {...props} />);
    }).toThrow();
  });
});
