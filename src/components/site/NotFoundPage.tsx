import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Home, Mail, Search, ShoppingBag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// 404 metadata (unique title/description + robots noindex) is server-rendered
// by the catch-all route in src/routes/$.tsx — see that file.
export function NotFoundPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");


  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    navigate({ to: "/products", search: { q: term } as never });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <div className="relative mx-auto max-w-md">
            <div className="text-[128px] font-black leading-none tracking-tighter text-primary/10 sm:text-[180px]">
              404
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="font-display text-4xl font-black text-primary sm:text-5xl">404</div>
            </div>
          </div>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Page not found
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            The page you're looking for doesn't exist, has been moved, or is temporarily
            unavailable. Try searching our catalog or head back home.
          </p>

          <form
            onSubmit={onSearch}
            className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-sm focus-within:border-primary"
          >
            <div className="grid h-10 w-10 place-items-center text-muted-foreground">
              <Search className="h-4 w-4" />
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search medical equipment…"
              aria-label="Search medical equipment"
              className="h-10 flex-1 bg-transparent text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
            >
              Search
            </button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
            >
              <Home className="h-4 w-4" /> Go Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
            >
              <ShoppingBag className="h-4 w-4" /> Browse Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
            >
              <Mail className="h-4 w-4" /> Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
