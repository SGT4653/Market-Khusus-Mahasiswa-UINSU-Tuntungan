const SUPABASE_URL = "https://htvynquqpvodggjsrsnw.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_5x9C7abjXOyE8l2I852NXQ_5kqmMKu2";

window.db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
