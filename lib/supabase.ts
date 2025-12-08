import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let client;

if (supabaseUrl && supabaseAnonKey) {
    client = createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.warn('Missing Supabase credentials. Supabase features will not work.');
    // Create a dummy client that warns when used (or just minimal mock to prevent crash)
    // Casting to any to avoid complex type mocking, assuming limited usage
    client = {
        from: () => ({
            insert: async () => ({ error: { message: 'Supabase not configured' } }),
            select: async () => ({ error: { message: 'Supabase not configured' }, data: [] }),
        }),
    } as any;
}

export const supabase = client;
