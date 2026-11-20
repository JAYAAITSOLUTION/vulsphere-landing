import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Vulnerability Management Blog | VulSphere",
  description:
    "Practical guides and source-backed analysis on vulnerability prioritization, remediation SLAs, scanner consolidation and compliance.",
  alternates: { canonical: "https://vulsphere.com/blog" },
  openGraph: {
    title: "Vulnerability Management Blog | VulSphere",
    description: "Practical, source-backed guides for security teams.",
    url: "https://vulsphere.com/blog",
    type: "website",
    images: ["/images/products/vulsphere/og-image.png"],
  },
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#1E2242] sm:text-5xl">VulSphere Blog</h1>
        <p className="mt-4 text-lg text-[#3a3f5c]">
          Source-backed guides on prioritizing, fixing and proving vulnerability remediation.
        </p>
      </header>
      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.slug} className="relative flex flex-col rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-shadow hover:shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7B61C9]">{p.category}</span>
            <h2 className="mt-3 text-xl font-bold leading-snug text-[#1E2242]">
              <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">
                {p.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-[15px] leading-7 text-[#3a3f5c]">{p.description}</p>
            <p className="mt-5 text-sm text-[#6b7090]">
              <time dateTime={p.datePublished}>{fmt(p.datePublished)}</time> · {p.readingMinutes} min read
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
