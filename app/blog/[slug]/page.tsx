import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AUTHOR, getPost, posts } from "@/lib/blog/posts";
import { PostBody } from "@/components/blog/rich-text";

type Props = { params: Promise<{ slug: string }> };

const SITE = "https://vulsphere.com";
const OG = "/images/products/vulsphere/og-image.png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: AUTHOR.name }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [AUTHOR.name],
      images: [{ url: OG, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [OG] },
  };
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

// Escape "<" so post text can never close the script tag (per Next.js JSON-LD guide).
const BACKSLASH = String.fromCharCode(92);
const safeJson = (v: unknown) => JSON.stringify(v).replace(/</g, BACKSLASH + "u003c");

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const url = `${SITE}/blog/${post.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `${SITE}${OG}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      mainEntityOfPage: url,
      author: { "@type": "Person", name: AUTHOR.name },
      publisher: { "@type": "Organization", name: "VulSphere", logo: { "@type": "ImageObject", url: `${SITE}/logo.png` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="container mx-auto px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }} />
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#6b7090]">
          <Link href="/" className="hover:text-[#7B61C9]">Home</Link> /{" "}
          <Link href="/blog" className="hover:text-[#7B61C9]">Blog</Link>
        </nav>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#7B61C9]">{post.category}</span>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#1E2242] sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-sm text-[#6b7090]">
          By {AUTHOR.name} · Published <time dateTime={post.datePublished}>{fmt(post.datePublished)}</time>
          {post.dateModified !== post.datePublished && (
            <> · Updated <time dateTime={post.dateModified}>{fmt(post.dateModified)}</time></>
          )}{" "}
          · {post.readingMinutes} min read
        </p>

        <p className="mt-8 rounded-2xl bg-[#F6F5FB] p-5 text-[17px] leading-8 text-[#1E2242]">
          <strong className="font-semibold">In short: </strong>{post.summary}
        </p>

        <div className="mt-8"><PostBody blocks={post.body} /></div>

        <section className="mt-12 border-t border-[#E8E8E8] pt-8">
          <h2 className="text-lg font-bold text-[#1E2242]">Sources</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-[15px] text-[#3a3f5c]">
            {post.sources.map((s) => (
              <li key={s.url}><a href={s.url} target="_blank" rel="noopener" className="text-[#7B61C9] underline underline-offset-2">{s.label}</a></li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl bg-[#1a1a2e] p-8 text-white">
          <h2 className="text-2xl font-bold">See your findings through to a verified fix</h2>
          <p className="mt-2 text-white/70">Walk through VulSphere&apos;s lifecycle on your own scanner data.</p>
          <a href={SITE} className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#1E2242]">Request a demo</a>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-bold text-[#1E2242]">Keep reading</h2>
          <ul className="mt-3 space-y-2">
            {related.map((p) => (
              <li key={p.slug}><Link href={`/blog/${p.slug}`} className="text-[#7B61C9] underline underline-offset-2">{p.title}</Link></li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
