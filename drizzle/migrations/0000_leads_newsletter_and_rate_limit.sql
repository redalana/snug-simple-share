ALTER TABLE public.leads ALTER COLUMN full_name DROP NOT NULL;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS ip_hash TEXT;
CREATE INDEX IF NOT EXISTS leads_ip_hash_created_idx ON public.leads (ip_hash, created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_source_idx ON public.leads (lower(email), source, created_at DESC);