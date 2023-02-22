'use client'
import { useSupabase } from '@/components'
import style from './style.module.scss'

export default function Login () {
  const { supabase } = useSupabase()
  const handleGitHubLogin = async () => await supabase.auth.signInWithOAuth({ provider: 'github' })

  return (
    <>
      <button onClick={handleGitHubLogin} className={style.button}>GitHub Login</button>
    </>
  )
}
