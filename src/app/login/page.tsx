'use client'
import { useSupabase } from '@/components'

export default function Login () {
  const { supabase } = useSupabase()
  const handleGitHubLogin = async () => await supabase.auth.signInWithOAuth({ provider: 'github' })

  return (
    <>
      <button onClick={handleGitHubLogin}>GitHub Login</button>
    </>
  )
}
