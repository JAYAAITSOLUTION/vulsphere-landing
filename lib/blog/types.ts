export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Source = { label: string; url: string };

export type Post = {
  slug: string;
  title: string;
  /** Meta description, 140-160 chars */
  description: string;
  category: string;
  /** ISO date */
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  /** Direct answer shown at the top: helps readers and featured snippets */
  summary: string;
  body: Block[];
  sources: Source[];
};
