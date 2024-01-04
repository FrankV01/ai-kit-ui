import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";

export function SafeMarkdownToHtml(str: string): string {
  if (!str) return str;
  try {
    const s1 = marked.parse(str, {
      async: false,
      pedantic: false,
      gfm: true,
    }) as string;
    const s2 = sanitize(s1);
    return s2;
  } catch (err) {
    console.error(err);
    return str; //Return as is as a fallback.
  }
}

export default SafeMarkdownToHtml;
