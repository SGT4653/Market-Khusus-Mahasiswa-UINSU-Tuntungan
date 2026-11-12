
const SUPABASE_URL = "https://htvynquqpvodggjsrsnw.supabase.co";
const SUPABASE_ANON_KEY = "MASUKKAN_PUBLISHABLE_KEY_KAMU";

window.db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

