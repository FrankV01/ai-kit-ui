import { SafeMarkdownToHtml } from "../../SafeMarkdownToHtml";
import { sanitize } from "isomorphic-dompurify";
import { marked } from "marked";

describe("SafeMarkdownToHtml", () => {
  it("returns sanitized HTML for markdown input", async () => {
    const input = "# Hello\nThis is a [link](http://example.com)";
    const expectedOutput = sanitize(await marked.parse(input));
    const output = SafeMarkdownToHtml(input);
    expect(output).toBe(expectedOutput);
  });

  it("returns input as is when it cannot be parsed", () => {
    const input = "# Hello\nThis is a [link](http://example.com";
    const output = SafeMarkdownToHtml(input);

    const expected = `<h1>Hello</h1>\n<p>This is a [link](<a href="http://example.com">http://example.com</a></p>\n`;
    expect(output).toBe(expected);
  });

  it("returns input as is for empty string", () => {
    const input = "";
    const output = SafeMarkdownToHtml(input);
    expect(output).toBe(input);
  });
});
