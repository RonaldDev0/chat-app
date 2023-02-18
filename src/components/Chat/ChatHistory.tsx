import CardMessage from './CardMessage'
import style from './scss/ChatHistory.module.scss'

interface message {
  userId: String;
  sendUserId: String;
  insertAt: Number;
  message: String;
}

export default function ChatHistory () {
  const messages: message[] = [
    {
      userId: 'you',
      sendUserId: 'other',
      insertAt: 1,
      message: 'Hello'
    },
    {
      userId: 'other',
      sendUserId: 'you',
      insertAt: 2,
      message: 'Hi, how are you?'
    },
    {
      userId: 'you',
      sendUserId: 'other',
      insertAt: 3,
      message: 'fine, thanks'
    },
    {
      userId: 'you',
      sendUserId: 'other',
      insertAt: 4,
      message: 'and you?'
    },
    {
      userId: 'other',
      sendUserId: 'you',
      insertAt: 5,
      message: 'very good'
    }
  ]

  return (
    <div className={style.container}>
      {messages?.map((item: message) => <CardMessage key={item.insertAt} item={item} />)}
    </div>
  )
}
