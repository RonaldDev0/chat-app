import style from './scss/CardMessage.module.scss'

interface message {
  userId: String;
  sendUserId: String;
  insertAt: Number;
  message: String;
}

export default function CardMessage ({ item }: { item: message }) {
  const getClasName = () => {
    if (item.userId === 'you') {
      return style.youContainer
    } else {
      return style.container
    }
  }
  return (
    <div className={getClasName()}>
      <p>{item.message}</p>
      <p>{item.insertAt.toString()}</p>
    </div>
  )
}
