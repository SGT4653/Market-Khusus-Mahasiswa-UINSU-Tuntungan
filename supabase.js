
window.db = null;

try {
    const SUPABASE_URL = "https://htvynquqpvodggjsrsnw.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_5x9C7abjXOyE8l2I852NXQ_5kqmMKu2";

    if (!window.supabase) {
        throw new Error("Library Supabase tidak ditemukan");
    }

    window.db = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    console.log("CLIENT BERHASIL DIBUAT:", window.db);

} catch (error) {
    console.error("SUPABASE ERROR:", error);
}
