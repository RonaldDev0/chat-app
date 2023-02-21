import style from './scss/CardMessage.module.scss'

interface message {
  userId: String;
  sendUserId: String;
  insertAt: Number;
  message: String;
}

export default function CardMessage ({ item }: { item: message }) {
  const getContainer = () => {
    if (item.userId === 'you') {
      return style.youContainer
    } else {
      return style.otherContainer
    }
  }

  const getClasName = () => {
    if (item.userId === 'you') {
      return style.youMessage
    } else {
      return style.otherMessage
    }
  }
  return (
    <div className={getContainer()}>
      <div className={getClasName()}>
        <p>{item.message}</p>
      </div>
    </div>
  )
}
