import { Chat, ChatList } from '@/components'
import style from './page.module.scss'

export default function Home () {
  return (
    <div className={style.container}>
      <ChatList />
      <Chat />
    </div>
  )
}
