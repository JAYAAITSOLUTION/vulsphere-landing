import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/lib/blog/types";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i): ReactNode => {
        if (part.startsWith("**")) {
          return <strong key={i} className="font-semibold text-[#1E2242]">{part.slice(2, -2)}</strong>;
        }
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (m) {
          const external = m[2].startsWith("http");
          const cls = "text-[#7B61C9] underline underline-offset-2 hover:text-[#5b42a8]";
          return external ? (
            <a key={i} href={m[2]} className={cls} target="_blank" rel="noopener">{m[1]}</a>
          ) : (
            <Link key={i} href={m[2]} className={cls}>{m[1]}</Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-[17px] leading-8 text-[#3a3f5c]">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i} className="pt-6 text-2xl font-bold text-[#1E2242]">{b.text}</h2>;
          case "h3":
            return <h3 key={i} className="pt-2 text-xl font-semibold text-[#1E2242]">{b.text}</h3>;
          case "p":
            return <p key={i}><Inline text={b.text} /></p>;
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6">
                {b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6">
                {b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}
              </ol>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-2xl border border-[#7B61C9]/20 bg-[#7B61C9]/5 p-5">
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-[#7B61C9]">{b.title}</p>
                <p className="text-base leading-7"><Inline text={b.text} /></p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-[#E8E8E8]">
                <table className="w-full text-left text-base">
                  <thead className="bg-[#F6F5FB] text-[#1E2242]">
                    <tr>{b.head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-[#E8E8E8]">
                        {r.map((c, k) => <td key={k} className="px-4 py-3 align-top">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
