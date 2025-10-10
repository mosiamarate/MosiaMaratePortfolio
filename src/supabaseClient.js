// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase project URL and anon/public API key
const SUPABASE_URL = "https://qiqmojlrrpqpmdrjdhls.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpcW1vamxycnBxcG1kcmpkaGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4Nzc4MTQsImV4cCI6MjA3NDQ1MzgxNH0.CCZSJcaJxBRQvDkFnFiMw_mSFmRaPbMiGVC4DVT-wE4";

export const supabase = createClient(
    SUPABASE_URL, 
    SUPABASE_ANON_KEY
);


export default supabase;


