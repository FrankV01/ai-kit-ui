import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";

export function SafeMarkdownToHtml(str: string): string {
  if (!str) return str;
  try {
    const markdown = sanitize(str);
    const s1 = marked.parse(markdown, {
      async: false,
      pedantic: false,
      gfm: true,
    }) as string;
    return s1;
  } catch (err) {
    console.error(err);
    return str; //Return as-is as a fallback.
  }
}

export default SafeMarkdownToHtml;
