import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib'

export const createClient = () => createBrowserSupabaseClient<Database>()
