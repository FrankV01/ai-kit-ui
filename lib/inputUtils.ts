import xss from "xss";

export function sanitizeInput(input: string): string {
  return xss(input);
}

const def = { sanitizeInput };
export default def;
