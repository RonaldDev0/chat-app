'use client'
import { supabase } from '@/utils'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import style from './scss/NavBarr.module.scss'

export default function NavBarr () {
  const [user, setUser] = useState('Loading...')
  const [image, setImage] = useState(null)

  useEffect(() => {
    const getName = async () => {
      const { data: { session: { user: { user_metadata: user } } } }: any = await supabase.auth.getSession()
      setUser(user.name)
      setImage(user.avatar_url)
    }
    getName()
  }, [])

  return (
    <div className={style.container}>
      {image ? <div className={style.imageContainer}><Image src={image} alt={image} width={45} height={45} /></div> : <p>Loading...</p>}
      <p>{user}</p>
    </div>
  )
}
