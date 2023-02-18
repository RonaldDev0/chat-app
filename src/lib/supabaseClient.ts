import { createClient } from '@supabase/supabase-js'

const URL: any = process.env.NEXT_PUBLIC_SUPABASE_URL
const KEY: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(URL, KEY)
