'use client'
import { useEffect, useState } from 'react'
import { Chat, ChatList } from '@/components'
import style from './page.module.scss'

export default function Home () {
  const [chats, setChats] = useState<String[] | null>(null)
  const [chatOpen, setChatOpen] = useState(null)

  useEffect(() => {
    const getChats = () => {
      const data = ['Elonk Musk', 'Bill Gates', 'Jeff Besos', 'Mark Zuckenberg']
      setChats(data)
    }
    getChats()
  }, [])

  return (
    <div className={style.container}>
      <ChatList chats={chats} setChatOpen={setChatOpen} />
      <Chat chatOpen={chatOpen} />
    </div>
  )
}
