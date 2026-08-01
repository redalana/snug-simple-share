CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  customer_profile TEXT,
  organization TEXT,
  country TEXT,
  city TEXT,
  department TEXT,
  interest TEXT,
  product TEXT,
  preferred_contact TEXT,
  message TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  page_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);