
const SUPABASE_URL = "https://htvynquqpvodggjsrsnw.supabase.co";

// Ganti dengan Publishable key asli dari Supabase
const SUPABASE_ANON_KEY = "MASUKKAN_PUBLISHABLE_KEY";

window.db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase client:", window.db);
