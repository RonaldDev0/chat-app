import { SupabaseListener, SupabaseProvider } from '@/components'
import { createClient } from '@/utils'
import { ReactNode } from 'react'
import './globals.scss'

// do not cache this layout
export const revalidate = 0

export default async function RootLayout ({ children }: { children: ReactNode }) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <html lang='en'>
      <head />
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}
