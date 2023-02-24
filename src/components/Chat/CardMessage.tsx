import style from './scss/CardMessage.module.scss'

interface message {
  id: number;
  user_id: String;
  send_to: String;
  message: String;
  created_at: Number;
}

export default function CardMessage ({ item, User }: { item: message, User: any }) {
  const date = new Date(item.created_at.toString())

  const getContainer = () => {
    if (item.user_id === User) {
      return style.youContainer
    } else {
      return style.otherContainer
    }
  }

  const getClasName = () => {
    if (item.user_id === User) {
      return style.youMessage
    } else {
      return style.otherMessage
    }
  }
  return (
    <div className={getContainer()}>
      <div className={getClasName()}>
        <p>{item.message}</p>
        <p className={style.hour}>{date.toString().slice(16, 21)}</p>
      </div>
    </div>
  )
}
