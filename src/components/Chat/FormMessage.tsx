'use client'
import { supabase } from '@/utils'
import { useState } from 'react'
import style from './scss/FormMessage.module.scss'

export default function FormMesage ({ User, chatOpen }: { User: String | null, chatOpen: String }) {
  const [message, setMessage] = useState('')

  const handleChange = (e: any) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (message !== '') {
      sendMessage(User, chatOpen, message)
    } else {
      alert('write a message')
    }
    setMessage('')
  }

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input type='text' className={style.input__text} autoFocus placeholder='Type a message' onChange={handleChange} value={message} />
    </form>
  )
}

const sendMessage = async (User: String | null, chatOpen: String, Message: String) => {
  const send = await supabase.from('messages').insert([{ user_id: User, send_to: chatOpen, message: Message }])
  return send
}
