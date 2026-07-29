import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck, Clock, Link2, Printer, RefreshCw, Share2 } from "lucide-react";

/**
 * Article utility rail: reading time, last-updated stamp, print / PDF,
 * copy link, native share and a local bookmark. All client-only and
 * hidden from print output.
 */
export function ArticleToolbar({
  slug,
  title,
  readingTime,
  lastUpdated,
}: {
  slug: string;
  title: string;
  readingTime: string;
  lastUpdated?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const storageKey = "af:bookmarked-articles";

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as string[];
      setSaved(list.includes(slug));
    } catch {
      /* ignore unreadable storage */
    }
  }, [slug]);

  const toggleBookmark = () => {
    try {
      const list = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as string[];
      const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug];
      localStorage.setItem(storageKey, JSON.stringify(next));
      setSaved(next.includes(slug));
    } catch {
      /* storage unavailable — bookmark is a progressive enhancement */
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  };

  const share = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: window.location.href });
        return;
      } catch {
        /* user dismissed */
      }
    }
    void copyLink();
  };

  const btn =
    "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-2 text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

  return (
    <div
      className="mt-6 flex flex-wrap items-center gap-2.5 rounded-2xl border border-border bg-secondary/40 px-4 py-3 print:hidden"
      role="toolbar"
      aria-label="Article tools"
    >
      <span className="inline-flex items-center gap-1.5 text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-muted-foreground">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {readingTime}
      </span>
      {lastUpdated && (
        <span className="inline-flex items-center gap-1.5 text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-muted-foreground">
          <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> Updated {lastUpdated}
        </span>
      )}
      <span className="mx-1 hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
      <button type="button" onClick={() => window.print()} className={btn} aria-label="Print this article">
        <Printer className="h-3.5 w-3.5" aria-hidden="true" /> Print
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className={btn}
        aria-label="Download this article as PDF using your browser print dialog"
      >
        <Share2 className="h-3.5 w-3.5 rotate-90" aria-hidden="true" /> Download PDF
      </button>
      <button type="button" onClick={copyLink} className={btn} aria-label="Copy link to this article">
        <Link2 className="h-3.5 w-3.5" aria-hidden="true" /> {copied ? "Copied" : "Copy link"}
      </button>
      <button type="button" onClick={share} className={btn} aria-label="Share this article">
        <Share2 className="h-3.5 w-3.5" aria-hidden="true" /> Share
      </button>
      <button
        type="button"
        onClick={toggleBookmark}
        className={btn}
        aria-pressed={saved}
        aria-label={saved ? "Remove bookmark" : "Bookmark this article"}
      >
        {saved ? (
          <BookmarkCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        ) : (
          <Bookmark className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {saved ? "Saved" : "Bookmark"}
      </button>
    </div>
  );
}
