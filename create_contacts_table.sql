-- Create the contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    sales_reps TEXT,
    role TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anonymous users to insert
CREATE POLICY "Allow anonymous inserts" ON public.contacts
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create a policy that allows authenticated users to read
CREATE POLICY "Allow authenticated reads" ON public.contacts
    FOR SELECT
    TO authenticated
    USING (true); 