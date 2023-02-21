import CardMessage from './CardMessage'
import style from './scss/ChatHistory.module.scss'

export default function ChatHistory ({ User, chatOpen, messages }: { User : String | null, chatOpen: String, messages: any }) {
  const Filter = messages.filter((message: any) => message.user_id === User || chatOpen)
  const FilterMessages = Filter.filter((message: any) => message.send_to === User || chatOpen)
  return (
    <div className={style.container}>
      {FilterMessages?.map((item: any, index: number) => <CardMessage key={index} item={item} User={User} />)}
    </div>
  )
}
