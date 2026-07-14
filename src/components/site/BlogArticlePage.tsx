import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Facebook,
  Linkedin,
  Link2,
  Mail,
  Twitter,
  User,
} from "lucide-react";
import { getArticle, getPrevNext, getRelated, type ContentBlock } from "@/lib/blog";

export function BlogArticlePage({ slug }: { slug: string }) {
  const article = getArticle(slug);

  if (!article) {
    return (
      <section className="bg-white pt-[140px] xl:pt-[180px]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
            404 — Article not found
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            We couldn't find that article
          </h1>
          <p className="mt-4 text-muted-foreground">
            It may have been moved or is no longer available.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const related = getRelated(article.slug, 3);
  const { prev, next } = getPrevNext(article.slug);

  return (
    <div className="bg-white">
      <Breadcrumb category={article.category} title={article.title} />
      <Hero article={article} />
      <Body article={article} />
      <PrevNext prev={prev} next={next} />
      <Related items={related} />
      <NewsletterCTA />
    </div>
  );
}

/* ---------------- Breadcrumb ---------------- */

function Breadcrumb({ category, title }: { category: string; title: string }) {
  return (
    <section className="bg-secondary pt-[100px] xl:pt-[150px]">
      <div className="mx-auto max-w-[87.5rem] px-6 py-4 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-ink">{category}</span>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="truncate text-ink">{title}</span>
        </nav>
      </div>
    </section>
  );
}

/* ---------------- Hero ---------------- */

function Hero({
  article,
}: {
  article: ReturnType<typeof getArticle> extends infer T
    ? T extends undefined
      ? never
      : NonNullable<T>
    : never;
}) {
  return (
    <section className="bg-secondary pb-10 lg:pb-14">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
            {article.category}
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {article.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> {article.author.name}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {article.publishedDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {article.readingTime}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 aspect-[16/8] w-full max-w-[80rem] overflow-hidden rounded-3xl bg-ink shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]"
        >
          <img
            src={article.coverImage}
            alt={article.title}
            style={{ objectPosition: article.focus ?? "center center" }}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Body ---------------- */

function Body({
  article,
}: {
  article: NonNullable<ReturnType<typeof getArticle>>;
}) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto grid max-w-[87.5rem] gap-10 px-6 lg:grid-cols-[280px_1fr] lg:px-10 xl:grid-cols-[300px_1fr_260px] xl:gap-12">
        <TableOfContents items={article.tableOfContents} />
        <article className="min-w-0">
          <SocialShare title={article.title} />
          <div className="prose-article mt-8">
            {article.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
          <AuthorCard author={article.author} />
        </article>
        <aside className="hidden xl:block">
          <div className="sticky top-[170px] space-y-6">
            <StickyCTA />
          </div>
        </aside>
      </div>
    </section>
  );
}

function TableOfContents({
  items,
}: {
  items: { id: string; title: string }[];
}) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const handler = () => {
      let current: string | null = null;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < 160) current = item.id;
      }
      if (current) setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [items]);

  return (
    <aside className="lg:sticky lg:top-[170px] lg:self-start">
      <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)]">
        <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
          Table of Contents
        </p>
        <nav className="mt-4 space-y-1.5">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(it.id);
                  if (!el) return;
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 130,
                    behavior: "smooth",
                  });
                }}
                className={`block rounded-lg border-l-2 px-3 py-1.5 text-sm transition ${
                  isActive
                    ? "border-primary bg-primary/5 font-semibold text-primary"
                    : "border-transparent text-muted-foreground hover:border-primary/30 hover:text-ink"
                }`}
              >
                {it.title}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

function SocialShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const items = [
    {
      label: "Facebook",
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Twitter",
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Email",
      Icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 border-y border-border py-4">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        Share
      </span>
      <div className="flex items-center gap-2">
        {items.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Share on ${label}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <button
          type="button"
          aria-label="Copy link"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(url);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            } catch {
              /* ignore */
            }
          }}
          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-white px-3 text-xs font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
        >
          <Link2 className="h-4 w-4" />
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id}
          className="mt-10 scroll-mt-32 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-display text-xl font-bold text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 text-[15.5px] leading-[1.75] text-foreground/85">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15.5px] leading-[1.7] text-foreground/85"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-6 rounded-2xl border-l-4 border-primary bg-secondary p-6">
          <p className="font-display text-lg font-semibold italic leading-relaxed text-ink">
            "{block.text}"
          </p>
          {block.cite && (
            <footer className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              — {block.cite}
            </footer>
          )}
        </blockquote>
      );
    case "image":
      return (
        <figure className="mt-8">
          <div className="overflow-hidden rounded-2xl bg-secondary">
            <img
              src={block.src}
              alt={block.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "table":
      return (
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-secondary text-left">
                  {block.headers.map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-5 py-3 align-top text-foreground/85"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <p className="border-t border-border bg-secondary px-5 py-2 text-xs text-muted-foreground">
              {block.caption}
            </p>
          )}
        </div>
      );
    case "faq":
      return <Faq items={block.items} />;
  }
}

function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-6 space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-white transition"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-display text-base font-bold text-ink">
                {it.q}
              </span>
              <ChevronRight
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                  isOpen ? "rotate-90 text-primary" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border px-5 py-4 text-[15px] leading-relaxed text-foreground/85">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function AuthorCard({
  author,
}: {
  author: { name: string; role: string; avatar?: string };
}) {
  const initials = useMemo(
    () =>
      author.name
        .split(" ")
        .map((s) => s[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [author.name],
  );
  return (
    <div className="mt-12 flex items-center gap-4 rounded-2xl border border-border bg-secondary p-5">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {initials}
      </div>
      <div>
        <p className="font-display text-base font-bold text-ink">
          {author.name}
        </p>
        <p className="text-sm text-muted-foreground">{author.role}</p>
      </div>
    </div>
  );
}

function StickyCTA() {
  return (
    <div className="rounded-2xl border border-primary/15 bg-[linear-gradient(180deg,#fff5f5_0%,#fff_100%)] p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)]">
      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
        Talk to an expert
      </p>
      <h4 className="mt-2 font-display text-lg font-extrabold leading-snug text-ink">
        Planning a new imaging or turnkey project?
      </h4>
      <p className="mt-2 text-sm text-muted-foreground">
        Our engineers will help you scope, specify and cost the right platform
        for your facility.
      </p>
      <Link
        to="/contact"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_36px_-16px_rgba(220,38,38,0.55)] transition hover:-translate-y-0.5 hover:bg-primary-dark"
      >
        Request a Quote
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

/* ---------------- Prev / Next ---------------- */

function PrevNext({
  prev,
  next,
}: {
  prev?: NonNullable<ReturnType<typeof getArticle>>;
  next?: NonNullable<ReturnType<typeof getArticle>>;
}) {
  if (!prev && !next) return null;
  return (
    <section className="bg-white pb-14 lg:pb-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="grid gap-4 border-t border-border pt-8 md:grid-cols-2">
          {prev ? (
            <Link
              to="/blog/$slug"
              params={{ slug: prev.slug }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.3)]"
            >
              <ArrowLeft className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Previous Article
                </p>
                <p className="mt-1 font-display text-sm font-bold text-ink group-hover:text-primary">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center justify-end gap-4 rounded-2xl border border-border bg-white p-5 text-right transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.3)]"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Next Article
                </p>
                <p className="mt-1 font-display text-sm font-bold text-ink group-hover:text-primary">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Related ---------------- */

function Related({
  items,
}: {
  items: NonNullable<ReturnType<typeof getArticle>>[];
}) {
  if (!items.length) return null;
  return (
    <section className="bg-secondary py-14 lg:py-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
          Related Articles
        </h2>
        <p className="mt-2 text-muted-foreground">
          Keep exploring insights from our clinical and engineering teams.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <Link
              key={a.slug}
              to="/blog/$slug"
              params={{ slug: a.slug }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-secondary">
                <img
                  src={a.coverImage}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  {a.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-extrabold leading-snug text-ink transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
                <div className="mt-auto flex items-center gap-4 pt-5 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {a.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {a.publishedDate}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Newsletter / Final CTA ---------------- */

function NewsletterCTA() {
  const [email, setEmail] = useState("");
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary-foreground/80">
              Knowledge Center
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              Get expert insights in your inbox
            </h3>
            <p className="mt-3 text-sm text-white/70 sm:text-base">
              Monthly briefings on medical equipment, imaging technology and
              hospital operations — no fluff, unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white/80 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
