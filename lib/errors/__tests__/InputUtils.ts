import { sanitizeInput } from "../../InputUtils";
import xss from "xss";

describe("InputUtils", () => {
  it("sanitizes input correctly", () => {
    const input = '<script>alert("xss")</script>';
    const sanitizedInput = sanitizeInput(input);
    expect(sanitizedInput).toBe(xss(input));
  });

  it("returns original input when no xss attack", () => {
    const input = "Hello, World!";
    const sanitizedInput = sanitizeInput(input);
    expect(sanitizedInput).toBe(input);
  });

  it("handles empty string input", () => {
    const input = "";
    const sanitizedInput = sanitizeInput(input);
    expect(sanitizedInput).toBe(input);
  });
});
