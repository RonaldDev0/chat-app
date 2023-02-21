import CardMessage from './CardMessage'
import style from './scss/ChatHistory.module.scss'

export default function ChatHistory ({ chatOpen, messages }: { chatOpen: String, messages: any }) {
  return (
    <div className={style.container}>
      {messages?.map((item: any, index: number) => <CardMessage key={index} item={item} />)}
    </div>
  )
}
