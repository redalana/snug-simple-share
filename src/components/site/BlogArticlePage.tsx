import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronUp,
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  DollarSign,
  Facebook,
  FileText,
  Info,
  Lightbulb,
  Linkedin,
  Loader2,
  Link2,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  AlertTriangle,
  Truck,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react";

import solDes from "@/assets/sol-des.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import {
  getArticle,
  getRelated,
  type Article,
  type BenefitIcon,
  type ContentBlock,
} from "@/lib/blog";
import { openQuoteModal } from "@/lib/quote-modal";

/* ---------------- Page shell ---------------- */

export function BlogArticlePage({ slug }: { slug: string }) {
  const article = getArticle(slug);

  if (!article) {
    return (
      <section className="bg-white pt-[calc(140*var(--desktop-px-unit))] xl:pt-[calc(180*var(--desktop-px-unit))]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10">
          <p className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary">
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

  const related = getRelated(article.slug, 4);

  return (
    <div className="bg-white">
      <ReadingProgress />
      <ArticleLightbox />
      <Breadcrumb category={article.category} title={article.title} />
      <section className="bg-white pb-14 lg:pb-20">
        <div className="mx-auto grid max-w-[87.5rem] gap-10 px-6 pt-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:pt-10 xl:gap-12">
          <div className="min-w-0">
            <Hero article={article} />
            <div className="mt-14 max-w-[78ch] space-y-16 lg:space-y-20" data-article-content>
              {article.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
              <AuthorReview />
            </div>
          </div>
          <Sidebar article={article} related={related} />
        </div>
      </section>
      <ExpertCTA />
      <NewsletterBand />
      <BackToTop />
    </div>
  );
}

/* ---------------- Breadcrumb ---------------- */

function Breadcrumb({ category, title }: { category: string; title: string }) {
  return (
    <section className="bg-white pt-[calc(100*var(--desktop-px-unit))] xl:pt-[calc(150*var(--desktop-px-unit))]">
      <div className="mx-auto max-w-[87.5rem] px-6 pt-6 lg:px-10">
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
          <span className="hover:text-primary">{category}</span>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="line-clamp-1 text-ink">{title}</span>
        </nav>
      </div>
    </section>
  );
}

/* ---------------- Hero (title left, image right) ---------------- */

function Hero({ article }: { article: Article }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
      <div>
        <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary-foreground">
          {article.category}
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.25rem]">
          {article.title}
        </h1>
        <p className="mt-5 text-[calc(15.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {article.publishedDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            Updated {article.lastUpdated ?? article.publishedDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {article.readingTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" /> By {article.author.name}
          </span>
        </div>
        <SocialShare title={article.title} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] lg:aspect-[5/4]"
      >
        <img
          data-article-image
          src={article.coverImage}
          alt={article.title}
          style={{ objectPosition: article.focus ?? "center center" }}
          className="h-full w-full cursor-zoom-in object-cover"
        />
      </motion.div>
    </div>
  );
}

function SocialShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(window.location.href), []);
  const enc = encodeURIComponent;

  const items = [
    {
      label: "LinkedIn",
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
    {
      label: "Facebook",
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    },
    {
      label: "X",
      Icon: X,
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
    },
    {
      label: "WhatsApp",
      Icon: WhatsAppIcon,
      href: `https://wa.me/?text=${enc(`${title} ${url}`)}`,
    },
  ];

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">
        Share this article:
      </span>
      <div className="flex items-center gap-2">
        {items.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${label}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-ink transition hover:bg-primary hover:text-primary-foreground"
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
          className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-ink transition hover:bg-primary hover:text-primary-foreground"
        >
          <Link2 className="h-4 w-4" />
        </button>
        {copied && (
          <span className="text-xs font-semibold text-primary">Copied</span>
        )}
      </div>
    </div>
  );
}

/* ---------------- Content blocks ---------------- */

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <div id={block.id} className="scroll-mt-32">
          <h2 className="font-display text-[1.6rem] font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
            {block.number ? `${block.number}. ` : ""}
            {block.text}
          </h2>
          {block.body && !block.image && (
            <p className="mt-4 text-[calc(15.5*var(--desktop-px-unit))] leading-[1.8] text-foreground/85">
              {block.body}
            </p>
          )}
          {block.body && block.image && (
            <div
              className={`mt-5 grid items-start gap-6 sm:grid-cols-[auto_1fr] ${
                block.imagePosition === "left" ? "" : "sm:[&>*:first-child]:order-2"
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary sm:w-[calc(260*var(--desktop-px-unit))]">
                <img
                  data-article-image
                  src={block.image}
                  alt={block.imageAlt ?? block.text}
                  width="520"
                  height="390"
                  className="h-full w-full cursor-zoom-in object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-[calc(15.5*var(--desktop-px-unit))] leading-[1.8] text-foreground/85">
                {block.body}
              </p>
            </div>
          )}
        </div>
      );

    case "h3":
      return (
        <h3 className="font-display text-xl font-bold text-ink">
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="text-[calc(15.5*var(--desktop-px-unit))] leading-[1.8] text-foreground/85">
          {block.text}
        </p>
      );

    case "intro":
      return (
        <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            {block.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[calc(15.5*var(--desktop-px-unit))] leading-[1.8] text-foreground/85"
              >
                {p}
              </p>
            ))}
          </div>
          {block.image && (
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary sm:w-[calc(260*var(--desktop-px-unit))]">
              <img
                data-article-image
                src={block.image}
                alt={block.imageAlt ?? ""}
                loading="lazy"
                width="520"
                height="390"
                className="h-full w-full cursor-zoom-in object-cover"
              />
            </div>
          )}
        </div>
      );

    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="flex gap-3 text-[calc(15.5*var(--desktop-px-unit))] leading-[1.7] text-foreground/85"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {it}
            </li>
          ))}
        </ul>
      );

    case "benefits":
      return <BenefitsGrid items={block.items} />;

    case "table":
      return <PriceTable {...block} />;

    case "requirements":
      return <Requirements {...block} />;

    case "roi":
      return <RoiSection {...block} />;

    case "faq":
      return <Faq items={block.items} />;

    case "callout":
      return <Callout {...block} />;

    case "stats":
      return <StatsBlock items={block.items} />;

    case "takeaways":
      return <Takeaways items={block.items} />;

    case "keyFacts":
      return <KeyFacts {...block} />;

    case "quickFacts":
      return <QuickFacts items={block.items} />;

    case "comparison":
      return <ComparisonTable {...block} />;

    case "relatedDiseases":
      return <RelatedDiseases items={block.items} />;

    case "relatedArticleLinks":
      return <RelatedArticleLinks items={block.items} />;

    case "references":
      return <References items={block.items} />;

    case "reviewedBy":
      return <ReviewedBy name={block.name} specialty={block.specialty} date={block.date} />;

    case "quote":
      return (
        <blockquote className="rounded-2xl border-l-4 border-primary bg-secondary p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
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
        <figure>
          <div className="overflow-hidden rounded-2xl bg-secondary">
            <img
              data-article-image
              src={block.src}
              alt={block.alt}
              loading="lazy"
              width="1200"
              height="675"
              className="h-full w-full cursor-zoom-in object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 border-l-2 border-primary/40 pl-3 text-[calc(12.5*var(--desktop-px-unit))] italic leading-relaxed text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

/* -- Premium educational blocks -- */

function KeyFacts({
  covers,
  audience,
  readingTime,
  technology,
}: {
  covers: string;
  audience: string;
  readingTime: string;
  technology: string;
}) {
  const items = [
    { Icon: BookOpen, label: "What this covers", value: covers },
    { Icon: Users, label: "Who should read", value: audience },
    { Icon: Clock, label: "Reading time", value: readingTime },
    { Icon: Cpu, label: "Main technology", value: technology },
  ];
  return (
    <div className="rounded-2xl border border-primary/15 bg-[linear-gradient(180deg,#fff5f5_0%,#fff_100%)] p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ Icon, label, value }) => (
          <div key={label} className="flex gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15 text-primary">
              <Icon className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary">
                {label}
              </p>
              <p className="mt-1 text-[calc(14.5*var(--desktop-px-unit))] leading-snug text-ink">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickFacts({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/60 p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-emerald-500/20 text-emerald-600">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <p className="font-display text-lg font-extrabold text-ink">Quick Facts</p>
      </div>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <li
            key={it}
            className="flex gap-3 text-[calc(14.5*var(--desktop-px-unit))] leading-[1.7] text-foreground/85"
          >
            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonTable({
  title,
  headers,
  rows,
  caption,
}: {
  title?: string;
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div>
      {title && (
        <p className="mb-3 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary">
          {title}
        </p>
      )}
      <div className="overflow-hidden rounded-2xl border border-border shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[calc(14*var(--desktop-px-unit))]">
            <thead>
              <tr className="bg-secondary text-left">
                {headers.map((h) => (
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
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-border transition-colors odd:bg-white even:bg-secondary/30 hover:bg-primary/[0.03]"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-5 py-3 align-top leading-relaxed ${
                        j === 0
                          ? "font-semibold text-ink"
                          : "text-foreground/85"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {caption && (
        <p className="mt-3 flex items-start gap-2 text-[calc(12*var(--desktop-px-unit))] italic text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {caption}
        </p>
      )}
    </div>
  );
}

function RelatedDiseases({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-[calc(13*var(--desktop-px-unit))] font-medium text-ink"
        >
          <Stethoscope className="h-3.5 w-3.5 text-primary" />
          {it}
        </span>
      ))}
    </div>
  );
}

function RelatedArticleLinks({
  items,
}: {
  items: { slug: string; title: string; category: string; readingTime: string }[];
}) {
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
          <BookOpen className="h-5 w-5" />
        </div>
        <p className="font-display text-lg font-extrabold text-ink">
          Continue Reading
        </p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Related educational articles from the AbuFarha Knowledge Center.
      </p>
      <ul className="mt-4 divide-y divide-border">
        {items.map((a) => (
          <li key={a.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: a.slug }}
              className="group flex items-start justify-between gap-4 py-3 transition-colors hover:text-primary"
            >
              <div className="min-w-0">
                <p className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary">
                  {a.category}
                </p>
                <p className="mt-1 font-display text-[calc(15*var(--desktop-px-unit))] font-bold text-ink transition-colors group-hover:text-primary">
                  {a.title}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {a.readingTime}
                </p>
              </div>
              <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function References({ items }: { items: { label: string; url?: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/40 p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-border text-ink">
          <FileText className="h-5 w-5" />
        </div>
        <p className="font-display text-lg font-extrabold text-ink">
          References & Guidelines
        </p>
      </div>
      <ol className="mt-4 space-y-2.5 text-[calc(14*var(--desktop-px-unit))] leading-relaxed text-foreground/85">
        {items.map((r, i) => (
          <li key={r.label} className="flex gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[calc(10.5*var(--desktop-px-unit))] font-bold text-primary">
              {i + 1}
            </span>
            {r.url ? (
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline"
              >
                {r.label}
              </a>
            ) : (
              <span>{r.label}</span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[calc(12*var(--desktop-px-unit))] italic text-muted-foreground">
        This article is for educational purposes and is not a substitute for professional medical advice, diagnosis or treatment.
      </p>
    </div>
  );
}

function ReviewedBy({ name, specialty, date }: { name: string; specialty: string; date: string }) {
  return (
    <aside
      aria-label="Medically reviewed by"
      className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-muted-foreground">
            Medically reviewed by
          </p>
          <p className="mt-0.5 font-display text-[calc(15*var(--desktop-px-unit))] font-extrabold text-ink">
            {name}
          </p>
          <p className="text-[calc(13*var(--desktop-px-unit))] text-muted-foreground">
            {specialty}
          </p>
        </div>
      </div>
      <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-secondary px-3 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-semibold text-ink sm:self-auto">
        <Calendar className="h-3.5 w-3.5" /> Reviewed {date}
      </div>
    </aside>
  );
}


const BENEFIT_ICONS: Record<
  BenefitIcon,
  React.ComponentType<{ className?: string }>
> = {
  cost: DollarSign,
  reliability: ShieldCheck,
  delivery: Truck,
  performance: BarChart3,
};

function BenefitsGrid({
  items,
}: {
  items: { icon: BenefitIcon; title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => {
        const Icon = BENEFIT_ICONS[it.icon];
        return (
          <div
            key={it.title}
            className="rounded-2xl border border-border bg-white p-5 text-center shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_40px_-24px_rgba(15,23,42,0.25)]"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-3 font-display text-[calc(15*var(--desktop-px-unit))] font-extrabold text-ink">
              {it.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {it.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* -- Price table -- */

function PriceTable({
  headers,
  rows,
  highlightLastColumn,
  caption,
}: {
  headers: string[];
  rows: string[][];
  highlightLastColumn?: boolean;
  caption?: string;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="lg:sticky lg:top-0 lg:z-10">
              <tr className="bg-secondary text-left">
                {headers.map((h) => (
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
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-border transition-colors hover:bg-secondary/60">
                  {row.map((cell, j) => {
                    const isHighlight =
                      highlightLastColumn && j === row.length - 1;
                    return (
                      <td
                        key={j}
                        className={`px-5 py-3 align-top ${
                          isHighlight
                            ? "font-bold text-emerald-600"
                            : "text-foreground/85"
                        }`}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {caption && (
        <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="grid h-4 w-4 place-items-center rounded-full border border-muted-foreground/40 text-[calc(10*var(--desktop-px-unit))]">
            i
          </span>
          {caption}
        </p>
      )}
    </div>
  );
}

/* -- Requirements -- */

function Requirements({
  checklist,
  specs,
}: {
  checklist: string[];
  specs: { title: string; rows: { label: string; value: string }[] };
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ul className="space-y-3">
        {checklist.map((it) => (
          <li
            key={it}
            className="flex items-start gap-3 text-[calc(15*var(--desktop-px-unit))] text-foreground/85"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            {it}
          </li>
        ))}
      </ul>
      <div className="rounded-2xl border border-border bg-secondary p-5">
        <p className="font-display text-[calc(15*var(--desktop-px-unit))] font-extrabold text-ink">
          {specs.title}
        </p>
        <dl className="mt-4 space-y-3 text-sm">
          {specs.rows.map((r) => (
            <div key={r.label} className="flex items-start justify-between gap-6">
              <dt className="text-muted-foreground">{r.label}</dt>
              <dd className="text-right font-semibold text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/* -- ROI section -- */

function RoiSection({
  paragraph,
  bullets,
  callout,
}: {
  paragraph: string;
  bullets: string[];
  callout: { title: string; lines: string[] };
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div>
        <p className="text-[calc(15.5*var(--desktop-px-unit))] leading-[1.8] text-foreground/85">
          {paragraph}
        </p>
        <ul className="mt-5 space-y-2.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-[calc(15.5*var(--desktop-px-unit))] leading-[1.7] text-foreground/85"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl bg-[linear-gradient(180deg,#fff5f5_0%,#fff_100%)] p-5 ring-1 ring-primary/15">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <p className="font-display text-base font-extrabold text-primary">
            {callout.title}
          </p>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
          {callout.lines.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -- FAQ -- */

function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/40"
            >
              <span className="font-display text-[calc(15*var(--desktop-px-unit))] font-bold text-ink">
                {it.q}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 shrink-0 text-primary" />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-foreground/80">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* -- Callout / Stats / Takeaways -- */

const CALLOUT_STYLES: Record<
  "tip" | "note" | "important" | "clinical",
  { border: string; bg: string; text: string; icon: React.ComponentType<{ className?: string }>; label: string }
> = {
  tip: { border: "border-emerald-500/30", bg: "bg-emerald-50", text: "text-emerald-700", icon: Lightbulb, label: "Clinical Tip" },
  note: { border: "border-sky-500/30", bg: "bg-sky-50", text: "text-sky-700", icon: Info, label: "Note" },
  important: { border: "border-amber-500/40", bg: "bg-amber-50", text: "text-amber-700", icon: AlertTriangle, label: "Important" },
  clinical: { border: "border-primary/25", bg: "bg-primary/[0.04]", text: "text-primary", icon: Stethoscope, label: "Clinical Insight" },
};

function Callout({ variant, title, text }: { variant: "tip" | "note" | "important" | "clinical"; title?: string; text: string }) {
  const s = CALLOUT_STYLES[variant];
  const Icon = s.icon;
  return (
    <aside className={`flex gap-4 rounded-2xl border-l-4 ${s.border} ${s.bg} p-5`}>
      <div className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white shadow-sm ${s.text}`}>
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div className="min-w-0">
        <p className={`text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider ${s.text}`}>
          {title ?? s.label}
        </p>
        <p className="mt-1 text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-foreground/85">
          {text}
        </p>
      </div>
    </aside>
  );
}

function StatsBlock({ items }: { items: { value: string; label: string; source?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-white p-5 text-center shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
          <p className="font-display text-2xl font-extrabold text-primary sm:text-[1.75rem]">{s.value}</p>
          <p className="mt-1.5 text-sm font-semibold text-ink">{s.label}</p>
          {s.source && <p className="mt-1 text-[calc(10.5*var(--desktop-px-unit))] uppercase tracking-wider text-muted-foreground">{s.source}</p>}
        </div>
      ))}
    </div>
  );
}

function Takeaways({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-[linear-gradient(180deg,#fff5f5_0%,#fff_100%)] p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <p className="font-display text-lg font-extrabold text-ink">Key Takeaways</p>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[calc(15*var(--desktop-px-unit))] leading-[1.7] text-foreground/85">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


/* ---------------- Sidebar ---------------- */

function Sidebar({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-[calc(170*var(--desktop-px-unit))] lg:self-start">
      <OnThisPage items={article.tableOfContents} />
      <RelatedArticles items={related} />
      <SidebarNewsletter />
    </aside>
  );
}

function OnThisPage({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const handler = () => {
      let current: string | null = null;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < 180) current = item.id;
      }
      if (current) setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [items]);

  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
      <p className="font-display text-base font-extrabold text-ink">
        On this page
      </p>
      <nav className="mt-3 space-y-0.5">
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
                  top: el.getBoundingClientRect().top + window.scrollY - 140,
                  behavior: "smooth",
                });
              }}
              className={`flex items-center justify-between gap-2 border-l-2 py-1.5 pl-3 pr-2 text-sm transition ${
                isActive
                  ? "border-primary font-semibold text-primary"
                  : "border-transparent text-muted-foreground hover:text-ink"
              }`}
            >
              <span className="truncate">{it.title}</span>
              <ChevronRight className="h-3.5 w-3.5 opacity-40" />
            </a>
          );
        })}
      </nav>
    </div>
  );
}

function RelatedArticles({ items }: { items: Article[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
      <p className="font-display text-base font-extrabold text-ink">
        Related Articles
      </p>
      <div className="mt-4 space-y-4">
        {items.map((a) => (
          <Link
            key={a.slug}
            to="/blog/$slug"
            params={{ slug: a.slug }}
            className="group flex gap-3 rounded-lg p-1 transition-shadow hover:shadow-[0_12px_30px_-22px_rgba(15,23,42,0.45)]"
          >
            <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-secondary">
              <img
                src={a.coverImage}
                alt={a.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[calc(10*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary">
                {a.category}
              </p>
              <p className="mt-0.5 line-clamp-2 font-display text-[calc(13*var(--desktop-px-unit))] font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                {a.title}
              </p>
              <div className="mt-1 flex items-center gap-3 text-[calc(11*var(--desktop-px-unit))] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {a.readingTime}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {a.publishedDate}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SidebarNewsletter() {
  const form = useNewsletterForm();
  return (
    <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#fff5f5_0%,#fff_100%)] p-5 ring-1 ring-primary/15">
      <p className="font-display text-base font-extrabold leading-snug text-ink">
        Stay updated with the latest medical technology insights
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Subscribe to our newsletter and never miss an important update.
      </p>
      <form
        onSubmit={form.submit}
        className="mt-4 space-y-2.5"
      >
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => form.setEmail(e.target.value)}
          placeholder="Your email address"
          className="h-11 w-full rounded-full border border-border bg-white px-4 text-sm text-ink outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
        <button
          type="submit"
          disabled={form.loading}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-70"
        >
          {form.loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {form.loading ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {form.message && <p role="status" className={`mt-3 text-sm font-medium ${form.success ? "text-emerald-600" : "text-destructive"}`}>{form.message}</p>}
      <div className="mt-4 aspect-[16/8] w-full overflow-hidden rounded-xl bg-secondary">
        <img
          src={whyCathlab}
          alt="Medical technology"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/* ---------------- Bottom bands ---------------- */

function ExpertCTA() {
  return (
    <section className="bg-white pb-8">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(90deg,#fff5f5_0%,#fff_60%)] p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] ring-1 ring-primary/10 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto]">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-ink sm:text-[1.4rem]">
                Need expert advice?
              </h3>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                Our specialists can help you choose the right medical equipment
                for your facility and budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button
                type="button"
                onClick={() => openQuoteModal({ source: "blog-article" })}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_36px_-16px_rgba(220,38,38,0.55)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`https://wa.me/962799741318?text=${encodeURIComponent("I've just read your article and I'd like to discuss this system.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:text-[#128C7E]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="hidden h-32 w-56 shrink-0 overflow-hidden rounded-2xl lg:block">
              <img
                src={whyCathlab}
                alt="Medical specialists"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterBand() {
  const form = useNewsletterForm();
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-secondary p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04] sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto]">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-ink sm:text-[1.4rem]">
                Subscribe to our newsletter
              </h3>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                Get the latest buying guides, clinical insights and technology
                updates delivered to your inbox.
              </p>
            </div>
            <form
              className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
              onSubmit={form.submit}
            >
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => form.setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-12 w-full min-w-[calc(240*var(--desktop-px-unit))] rounded-full border border-border bg-white px-5 text-sm text-ink outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 sm:w-[calc(260*var(--desktop-px-unit))]"
              />
              <button
                type="submit"
                disabled={form.loading}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_18px_36px_-16px_rgba(220,38,38,0.55)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-70"
              >
                {form.loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {form.loading ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
            {form.message && <p role="status" className={`text-sm font-medium ${form.success ? "text-emerald-600" : "text-destructive"}`}>{form.message}</p>}
            <div className="hidden h-32 w-56 shrink-0 overflow-hidden rounded-2xl lg:block">
              <img
                src={solDes}
                alt="Newsletter"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useNewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setSuccess(false);
      setMessage("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setMessage("");
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setLoading(false);
    setSuccess(true);
    setMessage("Thank you — you're subscribed to AbuFarha Medical insights.");
    setEmail("");
  };

  return { email, setEmail, loading, message, success, submit };
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent" aria-hidden="true">
      <div className="h-full bg-primary transition-[width] duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lg transition-all ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

function AuthorReview() {
  return (
    <section className="border-t border-border pt-8" aria-label="Article reviewer">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">Reviewed by</p>
      <p className="mt-2 font-display text-lg font-extrabold text-ink">AbuFarha Biomedical Engineering Team</p>
      <p className="mt-1 text-sm text-muted-foreground">Certified Medical Equipment Specialists</p>
    </section>
  );
}

function ArticleLightbox() {
  const [images, setImages] = useState<Array<{ src: string; alt: string }>>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const open = (event: MouseEvent) => {
      const image = (event.target as HTMLElement).closest<HTMLImageElement>("[data-article-image]");
      if (!image) return;
      const all = Array.from(document.querySelectorAll<HTMLImageElement>("[data-article-image]"));
      setImages(all.map((item) => ({ src: item.currentSrc || item.src, alt: item.alt })));
      setIndex(all.indexOf(image));
    };
    document.addEventListener("click", open);
    return () => document.removeEventListener("click", open);
  }, []);

  useEffect(() => {
    if (index === null) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((value) => value === null ? null : (value + 1) % images.length);
      if (event.key === "ArrowLeft") setIndex((value) => value === null ? null : (value - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", keydown);
    };
  }, [index, images.length]);

  const move = (direction: number) => {
    setZoomed(false);
    setIndex((value) => value === null ? null : (value + direction + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {index !== null && images[index] && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Article image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          onClick={() => setIndex(null)}
          onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStart === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? touchStart) - touchStart;
            if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
            setTouchStart(null);
          }}
        >
          <button type="button" aria-label="Close image viewer" onClick={() => setIndex(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          {images.length > 1 && <button type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); move(-1); }} className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"><ChevronLeft className="h-6 w-6" /></button>}
          <img
            src={images[index].src}
            alt={images[index].alt}
            onClick={(event) => { event.stopPropagation(); setZoomed((value) => !value); }}
            className={`max-h-[88vh] max-w-[88vw] object-contain transition-transform duration-300 ${zoomed ? "cursor-zoom-out scale-150" : "cursor-zoom-in scale-100"}`}
          />
          {images.length > 1 && <button type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); move(1); }} className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"><ArrowRight className="h-6 w-6" /></button>}
          <span className="absolute bottom-5 text-xs font-semibold text-white/70">{index + 1} / {images.length}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

