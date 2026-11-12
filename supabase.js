
const SUPABASE_URL = "https://htvynquqpvodggjsrsnw.supabase.co";

// Masukkan publishable key asli dari Supabase
const SUPABASE_ANON_KEY = "ISI_PUBLISHABLE_KEY_ASLI";

if (!window.supabase) {
    throw new Error("Library Supabase belum berhasil dimuat.");
}

window.db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
